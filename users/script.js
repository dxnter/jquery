$(document).ready(function () {
    $('#button').click(function () {
        var firstName = $('#firstname').val();
        var lastName = $('#lastname').val();
        var email = $('#emailaddress').val();
        var phone = $('#phonenum').val();
        $('tbody').append("<tr>" + '<td>' + firstName + '</td>' + '<td>' + lastName + '</td>' + '<td>' + email + '</td>' + '<td>' + phone + '</td>' + "</tr>");
    });
});