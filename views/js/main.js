
(function ($) {
    "use strict";
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function () {
        var check = true;
        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }
        if (check == true) {
            //lấy các param của google gửi
            const urlParams = new URLSearchParams(window.location.search);
            let state = urlParams.get('state');
            let redirect_uri = urlParams.get('redirect_uri');
            //api xác thực và trả về token cho người dùng
            axios.post('/auth', {
                username: input[0].value,
                password: input[1].value,
                state: state,
                redirect_uri: redirect_uri
            })
                .then(function (response) {
                    console.log(response);
                    notify({
                        message: 'Đăng nhập thành công',
                        color: 'success',
                        timeout: 1000
                    });
                    //chuyển đến trang callback bao gồm state và access token
                    setTimeout(() => {
                        window.location.href = `${redirect_uri}#access_token=${response.data.accessToken}&token_type=bearer&state=${state}`
                    }, 2000);

                })
                .catch(function (error) {
                    console.log(input[0].value);
                    console.log(error);
                    notify({
                        message: 'Đăng nhập thất bại',
                        color: 'danger',
                        timeout: 2000
                    });
                });
        }
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);