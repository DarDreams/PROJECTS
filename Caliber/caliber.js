var caliber = {
    resizerName: function(name, len) {
        //console.log(name.length);
        len = len - name.length-1;
        for (var i = 1; i <= len; i++) {
            name += " ";
         //   console.log(i);
        }
        return name;
    },
    resizerNumbers: function(num, loop) {
        var res = 0;
        for (var i = 1; i < loop - num.length; i++) {
           res += "0";
        }
          if (num.length >= loop) {
              return num;
          } else {
              //return `${res}${num}`;
              return String(res+num);
          };
    },
    // checkSkills: function(text) {

    //     text = String(text);
    //     var skills = {
    //         PERK_1: [
    //             "booster_pouch",
    //             "field_medicine",
    //             "advanced_training",
    //             "heavyweight_marathon",
    //             "battle_hardening",
    //             "strong_nerves",
    //             "hemoglobin_serum",
    //             "second_wind",
    //             "take_aim",
    //             "well_rested",
    //             "self_healing",
    //             "will_to_live",
    //             "healing_factor",
    //             "sixth_sense",
    //             "cold_blood",
    //             "adrenaline_rush",
    //             "dead_silence",
    //             "in_the_crosshairs"
    //         ],
    //         PERK_2: [
    //             "fireres_materials",
    //             "subdermal_meldonium",
    //             "shrapnel_layer",
    //             "subdermal_morphine",
    //             "regenerative_materials",
    //             "adaptive_armor",
    //             "tight_fit",
    //             "combined_armor",
    //             "head_protection",
    //             "lightweight_armor",
    //             "stay_frosty",
    //             "stim_medpacks",
    //             "inner_strength"
    //         ],
    //         PERK_3: [
    //             "forend_processing",
    //             "barrel_cutting",
    //             "quick_release_magazines",
    //             "direct_acting_shutter",
    //             "super_sensitive_trigger",
    //             "armor_piercing_rounds",
    //             "heavy_ammunition",
    //             "thermal_imager",
    //             "expansive_bullets",
    //             "flatness",
    //             "tungsten_coating",
    //             "consumables_pouch",
    //             "prudence",
    //             "strong_stim",
    //             "robotic_calibrations",
    //             "heavy_barrel",
    //             "lightweight_equipment"
        
    //         ],
    //         PERK_4: [
    //             "spare_syringe",
    //             "improved_formula",
    //             "cold_math",
    //             "altitude_training",
    //             "stealth_warrior",
    //             "ambush",
    //             "blood_rage",
    //             "counter_attack",
    //             "head_hunter",
    //             "retaliation",
    //             "lone_wolf",
    //             "fast_revive",
    //             "merciless",
    //             "die_hard",
    //             "shoulder_to_shoulder",
    //             "own_priorities"
    //         ]
    //     };
    //     for (var key in skills) {
    //        // console.log(skills[key].length);///////////////////
    //         for (var i = 0; i <= skills[key].length-1;i++) {
    //            if (skills[key][i] == text) {
    //                 return key+" "+(i+1);
    //            }
    //            if (text == "null") {
    //                 return key+" 0";
    //            }
    //         }
    //     }
    // },
    convertNumbers: function(numbers) {
        numbers = String(numbers);
        var res = "";
        var sNumb = {
            0: "{Chr(8304)}",
            1: "{Chr(185)}",
            2: "{Chr(178)}",
            3: "{Chr(179)}",
            4: "{Chr(8308)}",
            5: "{Chr(8309)}",
            6: "{Chr(8310)}",
            7: "{Chr(8311)}",
            8: "{Chr(8312)}",
            9: "{Chr(8313)}",
            10: "{Chr(729)}",
            11: "{Chr(96)}",
            12: "{Chr(8314)}",
            13: "{Chr(8315)}"
        };
        numbers = numbers.split('');
        for (var key = 0; key < numbers.length+1; key++) {
            
            for (var value in sNumb) {
                 
                 if (numbers[key] == value) {
                    res += sNumb[value];
                }
                if (numbers[key] == ":") {
                    res += sNumb[10];
                    break;
                }
                if (numbers[key] == ".") {
                    res += sNumb[11];
                    break;
                } 
                if (numbers[key] == "-") {
                    res += sNumb[12];
                    break;
                }
                if (numbers[key] == "+") {
                    res += sNumb[13];
                    break;
                }
            }       
        }
        return res;
    },
    fixFile: function(str) {
        var caliber_b = [];
        var caliber_b2 = [];
        var data = str.match(/^(.*\n){0,2}.*/g);
        data = data[0].replace(/[^\x20-\x7E]+/g, '');
        data = data.replace(/[^ -~]+/g, '');
        data = data.replace(/.*?({.*)/, "$1");
        caliber_b = data.match(/^(.*14":\[\]\})\w/)[0];
    
        caliber_b2 = data.match(/({"Log":[\s\S]*:true})/)[0];
    
        function fix(obj) {
            var brokenObject = obj;
            var fixedObject = brokenObject.replace(/'/g, '"').replace(/([a-zA-Z]+):/g, '"$1":');
            fixedObject = JSON.parse(fixedObject);
            return fixedObject;
        }
    
        caliber_b = fix(caliber_b);
        caliber_b2 = fix(caliber_b2);
        var caliber_obj = {
            data: caliber_b,
            log: caliber_b2
        };
        return caliber_obj;
    }
    
};
    
   // console.log(caliber.resizerName("Jack",20),"["+test+"]");
// console.log("RESIZE_NAME",caliber.resizerName("DAR", 10));
// console.log("RESIZE_NUMBER",caliber.resizerNumbers(2,4));
// console.log("CHECK_SKILLS",caliber.checkSkills("in_the_crosshairs"));
// console.log("CONVERT_NUMBERS",caliber.convertNumbers("6"));  
// console.log("MATCH",caliber.match.team1.gunner.dmg);

//console.log(caliber.fixFile(x));
 



  