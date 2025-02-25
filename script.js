"use strict";

const mass1 = document.getElementById("mass1");
const specificHeat1 = document.getElementById("specificHeat1");
const temp1 = document.getElementById("temp1");
const mass2 = document.getElementById("mass2");
const specificHeat2 = document.getElementById("specificHeat2");
const temp2 = document.getElementById("temp2");
const result = document.getElementById("result");
const btn = document.querySelector(".button");

btn.addEventListener("click", () => {
    const toEnglishDigits = (str) => str.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

    const m1 = parseFloat(toEnglishDigits(mass1.value));
    const c1 = parseFloat(toEnglishDigits(specificHeat1.value));
    const t1 = parseFloat(toEnglishDigits(temp1.value));
    const m2 = parseFloat(toEnglishDigits(mass2.value));
    const c2 = parseFloat(toEnglishDigits(specificHeat2.value));
    const t2 = parseFloat(toEnglishDigits(temp2.value));

    if (isNaN(m1) || isNaN(c1) || isNaN(t1) || isNaN(m2) || isNaN(c2) || isNaN(t2)) {
        result.textContent = "لطفا مقدار معتبری وارد کنید!";
        return;
    }

    const finalTemp = (m1 * c1 * t1 + m2 * c2 * t2) / (m1 * c1 + m2 * c2);
    result.textContent = `دمای نهایی: ${finalTemp} °C`;
});
