
function validate() {
    const text_to_validate = document.getElementById("input-text").value;
    const type = document.getElementById("input-type").value;
    const result_text_tag = document.getElementById("result-text");
    const result_tag = document.getElementById("result");

    var validated = false;

    if (text_to_validate == "") {
        result_text_tag.style.display = "none";
        return;
    } else {
        result_text_tag.style.display = "block";
    }

    switch (type) {
        case "phone-number":
            if (validate_phone_number(text_to_validate)) {
                validated = true;
            }
            break;

        case "email":
            if (validate_email(text_to_validate)) {
                validated = true;
            }
            break;

        case "post-code":
            if (validate_postal_code(text_to_validate)) {
                validated = true;
            }
            break;

        default:
            validated = false;
            break;
    }

    if (validated) {
        result_tag.innerHTML = "VALID!";
        result_tag.style.color = "green";
    } else {
        result_tag.innerHTML = "INVALID!";
        result_tag.style.color = "red";
    }

}

function validate_phone_number(text_to_validate) {
    const phone_regex = /^(?:(\+880)1\d{9}|01\d{9})$/;
    return phone_regex.test(text_to_validate);
}

function validate_email(text_to_validate) {
    // taken from https://stackoverflow.com/a/46181
    const email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email_regex.test(text_to_validate);
}

function validate_postal_code(text_to_validate) {
    // taken from https://stackoverflow.com/a/19844362
    const postal_code_regex = /^[a-z0-9][a-z0-9\- ]{0,6}[a-z0-9]$/;
    return postal_code_regex.test(text_to_validate);
}