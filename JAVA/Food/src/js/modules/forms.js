import { closeModal,openModal } from "./modal.js";
import { postData } from "../services/services.js";

function forms (formSelector, modalTimerId) {
    //  Forms

    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading : 'img/form/spinner.svg',
        sucess : "Спасибо! скоро мы с вами свяжемся",
        failure : 'что то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });
    


    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            //statusMessage.setAttribute(src) = message.loading;
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            `;
            
            form.insertAdjacentElement('afterend',statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('https://my-json-server.typicode.com/DarDreams/database/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.sucess);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            })
        });
    }



    function showThanksModal (message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        openModal('.modal',modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class = "modal__content">
            <div class = 'modal__close' data-close>x</div>
            <div class = 'modal__title'>${message}</div>
        </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000)
    }

    fetch('https://my-json-server.typicode.com/DarDreams/database/menu')
        .then(data => data.json())
        .then(res => console.log(res));

}

export default forms;