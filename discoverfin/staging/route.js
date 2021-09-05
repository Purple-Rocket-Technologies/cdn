
// Reading name cookie
var user_name = readCookie('Name');
var fin_num = readCookie('FIN Number');
fin_num = addCommas(fin_num);

$('#user_name').html('' + user_name);
$('#fin_num').html('$' + fin_num);

function submitRoute(redirectUrl) {
    unique_id = readCookie('Unique ID');
    user_id = readCookie('User ID');
    name = readCookie('Name');
    age = readCookie('Age');
    retirement_age = readCookie('Retirement Age');
    income_after_inflation = readCookie('Income After Inflation');
    income_befor_inflation = readCookie('Income Before Inflation');
    pension_choice = readCookie('Pension Choice');
    guessed_fin = readCookie('Guessed FIN');
    email = readCookie('Email');
    fin_number = readCookie('FIN Number');
    country_name = readCookie('Country');
    route_selection = readCookie('Route Selection');

    atomic('https://' + api_url + '/api/v1/users/submit/form', {
        method: 'POST',
        data: {
            'Unique-Id': unique_id,
            'User-Id': user_id,
            'Name': name,
            'Age': age,
            'Retirement-Age': retirement_age,
            'Annual-Income-after-inflation': income_after_inflation,
            'Annual-Income-before-Inflation': income_befor_inflation,
            'Pension-Choice': pension_choice,
            'Guessed-FIN': guessed_fin,
            'Email': email,
            'Fin-Number': fin_number,
            'country': country_name,
            'route_choice': route_selection,
        },
    })
        .then(function (response) {
            window.location.href = redirectUrl;
            console.log(response.data); // xhr.responseText
            console.log(response.xhr);  // full response
        })
        .catch(function (error) {
            alert('Oops, something went wrong!');
            console.log(error.status); // xhr.status
            console.log(error.statusText); // xhr.statusText
        });
}

function setCookies(field1, value1) {
    document.cookie = field1 + "=" + value1 + ";path=/";
}

$('#route_1').click(function () {
    setCookies('Route Selection', 'Manage Money Better');
    submitRoute('/route/manage-money-better');
});

$('#route_2').click(function () {
    setCookies('Route Selection', 'Make More Money');
    submitRoute('/route/make-more-money');
});

$('#route_3').click(function () {
    setCookies('Route Selection', 'Both');
    submitRoute('/route/both');
});
