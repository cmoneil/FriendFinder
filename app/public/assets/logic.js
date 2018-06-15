$(document).ready(function () {



    $(".submit").on("click", function (event) {
        event.preventDefault()

        function validate() {
            var isValid = true;
            $(".form").each(function () {
                if ($(this).val() === "") {
                    isValid = false;
                }
            });

            $(".chosen-select").each(function () {

                if ($(this).val() === "") {
                    isValid = false;
                }
            });
            return isValid;
        }

        if (validate()) {
            var newFriend = {
                name: $("#name").val().trim(),
                picture: $("#picture").val().trim(),
                scores: [
                    $('#q1').val(),
                    $('#q2').val(),
                    $('#q3').val(),
                    $('#q4').val(),
                    $('#q5').val(),
                    $('#q6').val(),
                    $('#q7').val(),
                    $('#q8').val(),
                    $('#q9').val(),
                    $('#q10').val()

                ]
            }

            console.log(newFriend);

            $.post("/api/friends", newFriend, function (data) {

                $('.modal-body').html('Your new best friend is : ' + data.name);
                $('.imagepreview').html('<img src = ' + data.photo + ' class="rounded">')
                console.log(data.photo)


                $("#name").val(""),
                    $("#picture").val(""),
                    $('#q1').val(""),
                    $('#q2').val(""),
                    $('#q3').val(""),
                    $('#q4').val(""),
                    $('#q5').val(""),
                    $('#q6').val(""),
                    $('#q7').val(""),
                    $('#q8').val(""),
                    $('#q9').val(""),
                    $('#q10').val("")


            });

        }
        else{
            alert("Please fill out the survey!")
        }

    }
)})

