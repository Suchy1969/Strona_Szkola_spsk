function toggle_profession_description(profession) {
    let allProfessions = document.getElementsByClassName("profession");

    Array.from(allProfessions).forEach(el => {
        console.log(el.id.split(' '));
        if (el.id.split(' ')[0] === profession) {
            if (el.style.display === "block") {
                el.style.display = "none";
            } else {
                el.style.display = "block";
            }
        } else {
            el.style.display = "none";
        }
    })
}