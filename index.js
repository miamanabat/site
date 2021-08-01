var myVar;
    
function myFunction() {
    myVar = setTimeout(showPage, 1500);
}

function showPage() {
    document.getElementById("loader-wrapper").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}


let sections = {
    'career': true,
    'education': true,
    'identity': true,
    'activity': true
}
function showSection(section) {
    if (sections[section]) {
        document.getElementById(section).classList.add('change');
        for (sect in sections) {
            document.getElementById(sect).style.opacity = '0';
            
        }    
        document.getElementById(section).style.opacity = '1';
    
    } else {
        document.getElementById(section).classList.remove('change');
        setTimeout(function() {
            for (sect in sections) {
                document.getElementById(sect).style.opacity = '1';
            }    
        }, 1000);
    }
    sections[section] = !sections[section];
}
$(document).delegate("div", "click", function() {
    window.location = $(this).find("a").attr("href");
});