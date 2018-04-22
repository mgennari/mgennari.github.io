(function () {

    //Modules in order of their appearance

    var myWebpage = angular.module('myPage', []);

    //Controllers in order of appearance

    myWebpage.controller("allTabs", function () {
        this.tab = 1;
        this.numTabs = 5;
        this.tabSet = function (checkTab) {
            return this.tab === checkTab;
        };
        this.setTab = function (setTab) {
            this.tab = setTab;
        };
        this.tabLeft = function () {
            if (this.tab > 1) {
                this.tab -= 1;
                return this.setTab(this.tab);
            } else {
                return this.setTab(this.numTabs);
            }
        };
        this.tabRight = function () {
            if (this.tab < this.numTabs) {
                this.tab += 1;
                return this.setTab(this.tab);
            } else {
                return this.setTab(1);
            }
        };
    });

    myWebpage.controller("mySummary", function () {
        this.summary = [
            ["Advanced background in Nuclear Theory"],
            ["Advanced background in Applied Mathematics and branching experience in Pure Mathematics"],
            ["Background knowledge of Classical Physics, Modern Physics, and Astrophysics/Cosmology"],
            ["Proficient in several programming languages such as FORTRAN (High proficiency), R, Python, HTML, CSS, JavaScript (Experienced with the AngularJS framework), minimal experience with C++"],
            ["Trained and proficient in explaining high level content in mathematics and physics to varying audiences"]
        ]
    });

    myWebpage.controller("photosController", function () {
        this.images = [
            ["Images/RomanRuins.jpg", "Roman ruins in Palmera, Syria constructed around a long dried oasis"],
            ["Images/SyriaStorm.jpg", "Sandstorm and sunset near Aleppo, Syria"],
            ["Images/SunChurch.jpg", "The Republic of San Marino (located inside Italy)"],
            ["Images/Canoeing.jpeg", "Algonquin Park, Canada"],
            ["Images/Ziplining.jpg", "Whistler Mountain, British Columbia"],
        ];
        this.currPhoto = 0;
        this.incPhoto = function () {
            if (this.currPhoto < (this.images.length - 1)) {
                this.currPhoto++;
            } else {
                this.currPhoto = 0;
            }
        };
        this.decPhoto = function () {
            if (this.currPhoto > 0) {
                this.currPhoto--;
            } else {
                this.currPhoto = this.images.length - 1;
            }
        }
    });

    myWebpage.controller("researchController", function () {
        this.researchTRIUMF = [
            ["Images/research/He6_ndens.png", "There have been substantial advancements in developments of ab initio approaches to nuclear physics from which we can extract crucial quantities like nuclear densities. Nuclear densities are important as they provide insight into nuclear structure, act as input for optical potentials at high energy, and are a central object of density functional theory."],
            ["Images/research/elements_comparison2.png", "The purpose of my work was to compute a non-local translationally invariant (TRINV) nuclear density. The act of centre of mass (COM) removal generates a more physically accurate density, and a non-local form of the nuclear density is a more fundamental object to work with. Here we show differences between the COM contaminated density and the translationally invariant density for light nuclei."],
            ["Images/research/.png", "To view amplified effects of this COM removal and it's impact on density functional theory, we computed the kinetic density of nuclei which is dependent on gradients of the nuclear density. Here we display some results which show the differences between the COM contaminated case and the translationally invariant case."],

        ];
    });

    myWebpage.controller("prespostController", function () {
        
    });

    myWebpage.controller("publicationsController", function () {
        this.prespostSection = "Presentations and Posters";
        this.prespostList = [
            ["Research/Presentations/NonlocalDensitiesACOT.pdf", "Advisory Committee on TRIUMF Winter 2017, Theory Division"],
        ];
        this.reportSection = "Work Reports";
        this.workReports = [
            ["Research/WorkReports/NonlocalTRINVDensity-MKI.pdf", "Gennari, M. (2017). Nonlocal Translationally Invariant Nuclear Density. TRIUMF Theory Division. UBC, Vancouver, British Columbia."],
            ["Research/WorkReports/MathCentreWorkReportMKVI.pdf", "Gennari, M. (2016). Evaluating the Effectiveness of Math Centre Advertising Methods. Humber College Math Centre. Humber College, Toronto, Ontario."],
            ["Research/WorkReports/MathCentreSIRFCumulativeReport.pdf", "Gennari, M. (2016). Humber Math Centre SIRF Summary Report. Humber College Math Centre. Humber College, Toronto, Ontario."]
        ];
        this.researchSection = "Published Papers";
        this.researchPapers = [
            [,]
        ];
    });

    myWebpage.controller("resumeController", function () {
        this.myResumes = [
            ["Resumes/GeneralResume.pdf", "Michael Gennari's Resume (Updated August 2017)"],
            ["Resumes/GeneralCV.pdf", "Michael Gennari's Curriculum Vitae (Updated August 2017)"],
            ["Resumes/HumberAcademicRef.pdf", "Academic Reference letter from Cameron Redsell-Montgomerie, Math Centre Coordinator, University of Guelph-Humber"]
        ];
    });

    myWebpage.controller("contactMeController", function () {
        this.emails = [
            ["Personal: ", "mgennari5216@gmail.com"],
            ["Waterloo Email: ", "mgennari@uwaterloo.ca"],
            ["TRIUMF Email: ", "mgennari@triumf.ca"],
            ["Humber Email: ", "Michael.Gennari@humber.ca"]
        ];
    });

    myWebpage.controller("myCopyrightController", function () {
        this.name = "Michael Gennari";
        this.currYear = '2017';
    });

    //Directives in order of appearance

    myWebpage.directive("headerDesign", function () {
        return {
            restrict: "E",
            templateUrl: "HTML/header-design.html",
            controller: function () {
                this.name = "Michael Gennari";
                this.headerSum = "Scroll down for more!";
            },
            controllerAs: "header"
        }
    });

    myWebpage.directive("mainTabs", function () {
        return {
            restrict: "E",
            templateUrl: "HTML/main-tabs.html",
            controller: "allTabs",
            controllerAs: 'tabs',
        };
    });

    myWebpage.directive("travelSlider", function () {
        return {
            restrict: "E",
            templateUrl: "HTML/travel-photos-slider.html",
            controller: "photosController",
            controllerAs: "photos"
        }
    });

    myWebpage.directive("myCopyright", function () {
        return {
            restrict: "E",
            templateUrl: "HTML/my-copyright.html",
            controller: "myCopyrightController",
            controllerAs: "copyrightCtrl"
        }
    });

})();