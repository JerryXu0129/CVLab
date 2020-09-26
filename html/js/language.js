function setCookie(){
    if(document.getElementById("title").innerHTML.match('SIGS')){
        document.cookie="English;path=/"
    }
    else if(document.getElementById("title").innerHTML.match('深圳')){
        document.cookie="Chinese;path=/"
    }
}

function getCookie(){
    var language=document.cookie
    console.log(language)
    if (language=="Chinese"){
        changeLanguage()
    }
}
function changeLanguage(){
    changeTitle()
    changeContent()
}
function changeTitle(){
    title=document.getElementById("title" )
    Home=document.getElementById("Home")
    Professor=document.getElementById("Professor")
    Research=document.getElementById("Research")
    Members=document.getElementById("Members")
    Courses=document.getElementById("Courses")
    Contact=document.getElementById("Contact")
    Language=document.getElementById("Language")
    copyright=document.getElementById("copyright")
    if (title.innerHTML.match('SIGS')){
        if(title.innerHTML.match('paper')){
            title.innerHTML="清华大学深圳国际研究生院<br/>计算机视觉与机器学习实验室<br/>论文"
            title.style.fontSize='30px'
        }
        else{
            title.innerHTML="清华大学深圳国际研究生院<br/>计算机视觉与机器学习实验室"
            title.style.fontSize='30px'
        }
        Home.innerHTML="主页"
        Professor.innerHTML="教授"
        Research.innerHTML="研究成果"
        Members.innerHTML="组内成员"
        Courses.innerHTML="课程"
        Contact.innerHTML="联系我们"
        Language.innerHTML="English"
        copyright.innerHTML="© 2020. 版权所有 | 由 Benjamin Zhang 设计"
    }
    else if(title.innerHTML.match('深圳')){
        if (title.innerHTML.match('论文')){
            title.innerHTML="SIGS CV & ML LAB-paper"
            title.style.fontSize='50px'
        }
        else{
            title.innerHTML="SIGS CV & ML LAB"
            title.style.fontSize='50px'
        }
        Home.innerHTML="Home"
        Professor.innerHTML="Professor"
        Research.innerHTML="Research"
        Members.innerHTML="Members"
        Courses.innerHTML="Courses"
        Contact.innerHTML="Contact us"
        Language.innerHTML="中文"
        copyright.innerHTML="© 2020. All rights reserved | Designed by Benjamin Zhang."
    }
}