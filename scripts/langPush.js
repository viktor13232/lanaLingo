//Switching lang
function changeLanguage(langJSONPath) {
    const langFile = getData(langJSONPath);
    
    langFile.then(text => {
        //Global
        document.querySelectorAll(".emailLang").forEach(el => el.innerHTML = text.emailLang);

        //Hero Section
        document.getElementById("heroCredo").innerHTML = text.heroSection.heroCredo;
        document.getElementById("heroApply").innerHTML = text.heroSection.heroApply;

        //Top Nav Section
        document.getElementById("topNavAboutMe").innerHTML = text.topNavSection.topNavAboutMe;
        document.getElementById("topNavMyApproach").innerHTML = text.topNavSection.topNavMyApproach;
        document.getElementById("topNavWhyMe").innerHTML = text.topNavSection.topNavWhyMe;
        document.getElementById("topNavLearningProcess").innerHTML = text.topNavSection.topNavLearningProcess;
        document.getElementById("topNavContactMe").innerHTML = text.topNavSection.topNavContactMe;

        //About Me Section
        document.getElementById("abouMeHi").innerHTML = text.aboutMeSection.aboutMeHi;
        document.getElementById("aboutMeColumnOne").innerHTML = text.aboutMeSection.aboutMeColumnOne;
        document.getElementById("aboutMeColumnTwo").innerHTML = text.aboutMeSection.aboutMeColumnTwo;
        document.getElementById("aboutMeColumnThree").innerHTML = text.aboutMeSection.aboutMeColumnThree;
        document.getElementById("aboutMeColumnFour").innerHTML = text.aboutMeSection.aboutMeColumnFour;

        //My Approach Section
        document.getElementById("myApproachHeading").innerHTML = text.myApproachSection.myApproachHeading;
        document.getElementById("myApproachColumnOne").innerHTML = text.myApproachSection.myApproachColumnOne;
        document.getElementById("myApproachColumnTwo").innerHTML = text.myApproachSection.myApproachColumnTwo;

        //Why Me Section
        document.getElementById("whyMeHeading").innerHTML = text.whyMeSection.whyMeHeading;
        document.getElementById("whyMeRowOne").innerHTML = text.whyMeSection.whyMeRowOne;
        document.getElementById("whyMeRowTwo").innerHTML = text.whyMeSection.whyMeRowTwo;
        document.getElementById("whyMeRowThree").innerHTML = text.whyMeSection.whyMeRowThree;
        document.getElementById("whyMeRowFour").innerHTML = text.whyMeSection.whyMeRowFour;
        document.getElementById("whyMeRowFive").innerHTML = text.whyMeSection.whyMeRowFive;

        //Learning Process Section
        document.getElementById("learningProcessHeading").innerHTML = text.learningProcessSection.learningProcessHeading;
        document.getElementById("learningProcessColumnOne").innerHTML = text.learningProcessSection.learningProcessColumnOne;
        document.getElementById("learningProcessColumnTwo").innerHTML = text.learningProcessSection.learningProcessColumnTwo;
        document.getElementById("learningProcessColumnThree").innerHTML = text.learningProcessSection.learningProcessColumnThree;
        document.getElementById("learningProcessColumnFour").innerHTML = text.learningProcessSection.learningProcessColumnFour;
        document.getElementById("learningProcessColumnFive").innerHTML = text.learningProcessSection.learningProcessColumnFive;
        document.getElementById("learningProcessColumnSix").innerHTML = text.learningProcessSection.learningProcessColumnSix;
        document.getElementById("learningProcessBottomText").innerHTML = text.learningProcessSection.learningProcessBottomText;

        //Contact Me Section
        document.getElementById("contactMeHeader").innerHTML = text.contactMeSection.contactMeHeader;
        document.getElementById("contactMeNameLabel").innerHTML = text.contactMeSection.contactMeNameLabel;
        document.getElementById("contactMeEmailLabel").innerHTML = text.contactMeSection.contactMeEmailLabel;
        document.getElementById("contactMeSubjectLabel").innerHTML = text.contactMeSection.contactMeSubjectLabel;
        document.getElementById("contactMeSubmitButton").innerHTML = text.contactMeSection.contactMeSubmitButton;
        document.getElementById("textAreaLang").placeholder = text.contactMeSection.textAreaPlaceholder;

        //Footer Section
        document.getElementById("footerHeader").innerHTML = text.footerSection.footerHeader;
        
        //test
       
        

    }).catch(error => {
        console.error('Error loading language file:', error);
    });
}
