"use strict";
function reverseVowels(s) {
    const vowels = "aeiouAEIOU";
    let ch = s.split("");
    let low = 0, high = s.length - 1;
    while (low < high) {
        if (vowels.includes(ch[low]) && vowels.includes(ch[high])) {
            [ch[low], ch[high]] = [ch[high], ch[low]];
            low++, high--;
        }
        else if (!vowels.includes(ch[low]))
            low++;
        else if (!vowels.includes(ch[high]))
            high--;
    }
    return ch.join("");
}
console.log(reverseVowels(".,"));
/* Me Two Pointer technique use karo ga
two pointer bnao ga
aik ko 0 index me rakho ga and dusre ko length-1 pe
sab se pehle me given string ko array me convert karo ga then me us array ko
manipulate karo ga aik vowels wali string bhe banani ha
and while loop lagao ga and and tab chalao ga jab tak low<high equal nahi
lagao ga because I don't wanna check the same character
loop ke andar me  string wali arrayy se check karo ga ke agar ke pehle to agar wo vowel ha
to matlab ke low and high agar vowel h  dono h vowels hone chahiye to unko replace kardo and low and high ko
to increment and decrement kardo ga kuinke wo dono h vowels the ab hame next move karna ha and also again phir check karna ke kon vowels nahi the tab h karna jab wo vowels na ho
us hissab se ham low and high ko move kare ge
*/
