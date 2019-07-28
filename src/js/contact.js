$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value);
    }, "type the correct answer -_-");
		
	$('.form-submit-message').hide();

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: false,
                    minlength: 10
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "come on, you have a name don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "no email, no message"
                },
                subject: {
                    required: "please indicate a subject"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url: $(form).attr('action'),
                    success: function() {
						$('#success').fadeIn();
                    },
                    error: function() {
						$('#error').fadeIn();
                    }
                })
            }
        });
        $('#appointmentForm').validate({
            rules: {
                convenient_month: {
                    required: true
                },
                convenient_day: {
                    required: true
                },
                convenient_year: {
                    required: true
                },
                convenient_time: {
                    required: true,
					minlength: 1
                },
                name: {
                    required: true,
                    minlength: 2
                },
                company: {
                    required: false,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:$(form).attr('action'),
                    success: function() {
						$('#success').fadeIn()
                    },
                    error: function() {
						$('#error').fadeIn()
                    }
                })
            }
        })
    })
        
 })(jQuery)
})