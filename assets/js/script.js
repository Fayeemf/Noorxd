var subtitles = ["Noor Raj", "Bronx-Sci Alumni", "Binghamton Freshman", "Comp-Sci bound", "Resume", "Noor Raj", "Noor Raj"];

// var projects = [
//     {
//         title: "Google Presentation.",
//         desc: "Dive into our research where we explain and elaborate on cases.",
//         img: "Mook.png",
//         link: "https://docs.google.com/presentation/d/1PCT0cmMbOhirs_81NCaTvOkI-r41_vfwEy1yozm0Knk/edit?usp=sharing"
//     },
// ]

var skills = [
    {
        name: "Yaboi",
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"
    },
]

var count = 0;
var tabOutLeft = false;

particlesJS.load('particles', 'assets/lib/particles.json', function() {
});

$(document).ready(function () {
    $("#title").fadeIn(1000);
    $("#navbar").fadeIn(3000);
    //$("#bg-pic").attr("src","assets/img/backgrounds/"+(Math.floor(Math.random()*18)+1)+".jpg");
    changeSubtitle();
    for (var i = 0; i < skills.length; i++) {
        $(".panel-group").append("<div class='panel'><h4><a data-toggle='collapse' data-parent='#accordion' href='#panel-" + skills[i].name + "'><img class='projectImg' src='assets/img/skills/" + skills[i].name + ".png'></a></h4><div id='panel-" + skills[i].name + "' class='panel-collapse collapse'><div class='panel-body'>" + skills[i].desc + "</div></div></div>");
    }
});

$("#sidebarTab-left").hover(function () {
    $("#sidebar-left").css("background-color", "#1a1a1a");
}, function () {
    $("#sidebar-left").css("background-color", "#212121");
});

$("#sidebarTab-left").click(function () {
    if (window.innerWidth > 700) {
        if (!tabOutLeft) {
            $("#title").css("left", "30%");
            $("#sidebar-left").css("left", 0);
            $("#sidebarTab-left").css("left", (.3 * window.innerWidth) - 10);
            $("#arrow-left").html("<i class='fa fa-chevron-left' aria-hidden='true'></i>");
            tabOutLeft = true;
        } else if (tabOutLeft) {
            $("#title").css("left", "0");
            $("#sidebar-left").css("left", "-30%");
            $("#sidebarTab-left").css("left", "-10px");
            $("#arrow-left").html("<i class='fa fa-chevron-right' aria-hidden='true'></i>");
            tabOutLeft = false;
        }
    } else if (window.innerWidth <= 700) {
        if (!tabOutLeft) {
            $("#title").css("transform", "translateY(-95%)");
            $("#sidebar-left").css("bottom", 0);
            $("#sidebarTab-left").css("bottom", (.5 * window.innerHeight) - 10);
            $("#arrow-left").html("<i class='fa fa-chevron-down' aria-hidden='true'></i>");
            if (window.innerWidth < 360) {
                $("#navbar").fadeOut(500);
            }
            tabOutLeft = true;
        } else if (tabOutLeft) {
            $("#title").css("transform", "translateY(-70%)");
            $("#sidebar-left").css("bottom", "-50%");
            $("#sidebarTab-left").css("bottom", "-10px");
            $("#arrow-left").html("<i class='fa fa-chevron-up' aria-hidden='true'></i>");
            if (window.innerWidth < 360) {
                $("#navbar").fadeIn(500);
            }
            tabOutLeft = false;
        }
    }
});

function changeSubtitle() {
    setInterval(function () {
        if (count < subtitles.length - 1) {
            $("#subtitle").html(subtitles[count]);
            count++;
        } else {
            $("#subtitle").html(subtitles[subtitles.length - 1]);
            count = 0;
        }
    }, 1000);
}
