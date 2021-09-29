var company_id, prospect_id, user_name;

if(readCookie('COMPANY_ID') && readCookie('prospect_id') && readCookie('Name') && readCookie('FIN Number')){
    company_id = readCookie('COMPANY_ID');     
    prospect_id = readCookie('prospect_id');
    user_name = readCookie('Name');
    setPageVariableValue();
} else {
    window.location.href = '/404';
}


function setPageVariableValue() {
    $('.user_name').each(function () { $(this).html('' + user_name); });
    $('#user_name').html('' + user_name);
}

$('#submit_btn').prop('disabled', true);

var progress_number = 0;
var reduction_count = 0;

if(readCookie('country') == "Canada"){
    $('.ans.check.canada').addClass('show');
}

function progress() {
    progress_number += 20;
    $('.progress_number').html('' + progress_number);
    $('.inner_prog_bar').css('width', progress_number + '%');
    if (progress_number == 100) {
        $('#submit_btn').prop('disabled', false);
    }
}

function progress_reduce() {
    progress_number -= 20;
    $('.progress_number').html('' + progress_number);
    $('.inner_prog_bar').css('width', progress_number + '%');
    $('#submit_btn').prop('disabled', true);
}

// Question 1
$('#Slide_1 .slide_cta').click(function () {
    //progress();
});

var answer_array_1 = [$("#ques_1").text()];
var answer_array_2 = [$("#ques_2").text()];
var answer_array_3 = [$("#ques_3").text()];
var answer_array_4 = [$("#ques_4").text()];
var answer_array_5 = [$("#ques_5").text()];


// Question 5
$('#Slide_2 .check').click(function () {
    var get_value = $(this).children('.check_box').siblings("div").html();
    check_element = $(this).children('.check_box').children('.extended_tick');

    if ($(check_element).hasClass('checked')) {
        $(check_element).removeClass('checked');
        answer_array_1.splice(answer_array_1.indexOf(get_value), 1);
    } else {
        $(check_element).addClass('checked');
        answer_array_1.push(get_value);
    }

    if (answer_array_1.length != 0) {
        $('#Slide_2 .next_btn').addClass('active');
    } else {
        $('#Slide_2 .next_btn').removeClass('active');
        if (progress_number > 75) {
            if (reduction_count == 0) {
                progress_reduce();
                $('#Slide_2 .next_btn').attr('data-clicked', 'no');
            }
            reduction_count = 1;
        }
    }
});



$('#Slide_3 .ans').click(function () {
    $('#Slide_3 .ans').removeClass('active');
    $(this).addClass('active');
    var selected_value = $(this).text();

    if ($('#question_1').val() == '') {
        progress();
    }

    answer_array_2 = [];
    answer_array_2.push($("#ques_2").text());
    answer_array_2.push(selected_value);
});




$('#Slide_4 .check').click(function () {
    var get_value = $(this).children('.check_box').siblings("div").html();
    check_element = $(this).children('.check_box').children('.extended_tick');

    if ($(check_element).hasClass('checked')) {
        $(check_element).removeClass('checked');
        answer_array_3.splice(answer_array_3.indexOf(get_value), 1);
    } else {
        $(check_element).addClass('checked');
        answer_array_3.push(get_value);
    }

    if (answer_array_3.length != 0) {
        $('#Slide_4 .next_btn').addClass('active');
    } else {
        $('#Slide_4 .next_btn').removeClass('active');
        if (progress_number > 75) {
            if (reduction_count == 0) {
                progress_reduce();
                $('#Slide_4 .next_btn').attr('data-clicked', 'no');
            }
            reduction_count = 1;
        }
    }
});


$('#Slide_5 .toggle_option').click(function () {
    $('#Slide_5 .toggle_option').removeClass('active');
    $(this).addClass('active');
    $('#nos_child').val('');

    var get_ans = $(this).children().html();

    if (get_ans == 'Me + Partner') {
        $('#Slide_5 .next_btn').removeClass('active');
        $('#nos_child').keyup(function () {
            if ($(this).val() == '') {
                $('#Slide_5 .next_btn').removeClass('active');
            } else {
                $('#Slide_5 .next_btn').addClass('active');
                answer_array_value = 'With my partner & have ' + $('#nos_child').val() + ' childrens';
                answer_array_4 = [];
                answer_array_4.push($("#ques_4").text());
                answer_array_4.push(answer_array_value);
            }
        });
    } else if (get_ans == 'Me') {
        $('#Slide_5 .next_btn').removeClass('active');
        $('#nos_child').keyup(function () {
            if ($(this).val() == '') {
                $('#Slide_5 .next_btn').removeClass('active');
            } else {
                $('#Slide_5 .next_btn').addClass('active');
                answer_array_value = 'No one & have ' + $('#nos_child').val() + ' childrens';
                answer_array_4 = [];
                answer_array_4.push($("#ques_4").text());
                answer_array_4.push(answer_array_value);
            }
        });
    }
});


$('#Slide_6 .toggle_option').click(function () {
    $('#Slide_6 .toggle_option').removeClass('active');
    $(this).addClass('active');

    var get_ans = $(this).children().html();
    $('#question_4').val(get_ans);

    answer_array_5 = [];
    answer_array_5.push($("#ques_5").text());
    answer_array_5.push(get_ans);

    if ($('#question_4').val() == '') {
        $('#Slide_6 .next_btn').removeClass('active');
    } else {
        $('#Slide_6 .next_btn').addClass('active');
    }
});



$('#Slide_6 .next_btn').click(function () {
    if ($(this).attr('data-clicked') == 'no') {
        progress();
    }
    $(this).attr('data-clicked', 'yes');
});


$('#Slide_3 .next_btn').click(function () {
    if ($(this).attr('data-clicked') == 'no') {
        progress();
    }
    $(this).attr('data-clicked', 'yes');
    reduction_count = 0;
});


$('#Slide_4 .next_btn').click(function () {
    if ($(this).attr('data-clicked') == 'no') {
        progress();
    }
    $(this).attr('data-clicked', 'yes');
});


$('#Slide_5 .next_btn').click(function () {
    if ($(this).attr('data-clicked') == 'no') {
        progress();
    }
    $(this).attr('data-clicked', 'yes');
});

$('#Slide_2 .next_btn').click(function () {
    if ($(this).attr('data-clicked') == 'no') {
        progress();
    }
    $(this).attr('data-clicked', 'yes');
});




//turning arrays into strings
function array_to_string(array_item){
    var stringy = "";
    for(i=0;i<array_item.length;i++){
        stringy = stringy + array_item[i];
        if(i < array_item.length-1){
            stringy = stringy + " * ";    
        }
    }
    return stringy;
}


//Submitting Form
function submit_route_answers() {
    const ques_1 = array_to_string(await translateToLanguage(answer_array_1));
    const ques_2 = array_to_string(await translateToLanguage(answer_array_2));
    const ques_3 = array_to_string(await translateToLanguage(answer_array_3));
    const ques_4 = array_to_string(await translateToLanguage(answer_array_4));
    const ques_5 = array_to_string(await translateToLanguage(answer_array_5));
  
    axios({
      method: 'put',
      url: 'https://' + api_url + '/api/v1/users/company/'+ company_id +'/prospects/' + prospect_id,    
      data: {
        ques_1,
        ques_2,
        ques_3,
        ques_4,
        ques_5
      }   
    }).then(function(response) {     
        window.location.href = "/route/manage-money-better/video";       
    })
    .catch(function (error) {
        console.log(error);
        alert("Oops, There was an unexpected error."); 
    });
}   


$("#submit_btn").click(function () {
    if(answer_array_1.length == 1 || answer_array_2.length == 1 || answer_array_3.length == 1 || answer_array_4.length == 1 || answer_array_5.length == 1){
      alert("Please answer all questions");
    } else {
      submit_route_answers();
    }  
});