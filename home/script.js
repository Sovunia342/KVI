start = (status) => {
    switch (status) {
        case "teacher":
            location.href = '../teacher/index.html'
            // window.open("", "_self")
            break;
        case "student":
            location.href = '../student/index.html'
            // window.open("", "_self")
            break;
    }
}