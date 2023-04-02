//********************************* */
// payment function
let creditInfo = document.getElementById('credit-card-info');

document.querySelectorAll("input[name=payment_method]").forEach(function (el) {
    el.addEventListener('change', function () {
        if(el.value === 'credit_card') {
            creditInfo.style.display = 'flex';
            document.querySelectorAll('#credit-card-info .form-group input').forEach(function (el) {
                el.removeAttribute('disabled');
            });
        }else {
            creditInfo.style.display = 'none';
            document.querySelectorAll('#credit-card-info .form-group input').forEach(function (el) {
                el.setAttribute('disabled', true);
            });
        }
    }) 
})
/********************************** */

/********************************** */
// Change cities When change contry payment form
var citiesByCountry = {
    sa: ['جدة', 'الرياض'],
    eg: ['الاسكندرية', 'القاهرة'],
    jo: ['الزرقاء', 'عمان'],
    sy: ['حماه', 'حلب', 'دمشق']
};
let citiesList = document.getElementById('select-city');
// عند تغيير البلد
document.getElementById("select-country").addEventListener('change', function () {
    // اجلب رمز البلد
    let country = this.value;
    // فرغ قائمة المدن
    while (citiesList.firstChild) {
        citiesList.removeChild(citiesList.firstChild);
    }
    // اعادة اضافة خيار اختر المدينة
    let option =document.createElement('option');
    option.disabled;
    option.selected;
    option.innerText = 'اختر المدينة';
    citiesList.appendChild(option);
    // اجلب مصفوفة المدن لهذا البلد
    let selctedCountry = citiesByCountry[country];
    // اضافة المدن لقائمة المدن
    selctedCountry.forEach(function (el) {
        let optionElement = document.createElement('option');
        optionElement.value = el;
        optionElement.innerText = el;
        citiesList.appendChild(optionElement);
    });
    
});

/********************************** */
