(function () {

    //Modules in order of their appearance
    var myWebpage = angular.module('myPage', []);

    //Controllers in order of appearance
    myWebpage.controller("allTabs", function () {
        this.tab = 1;
        this.numTabs = 3;
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
            ["Extensive background in mathematics and physics through degree requirments"],
            ["Advanced knowledge in nuclear physics from work on " + "ab initio" + " nuclear theory at TRIUMF"],
            ["First authored two manuscripts from work at TRIUMF (see research tab)"],
            ["Studying machine learning and applications to the nuclear many-body problem"],
            ["Experienced with several programming languages, in addition to OpenMP and MPI parallelization tecnhiques"],
            ["Proficiency as an educator achieved through direct tutoring and volunteering positions"],
        ]
    });

    myWebpage.controller("photosController", function () {
        this.images = [
            ["images/japan-garden.jpg","Japanese garden at DREB 2018 conference in Matsue, Japan."],
            ["images/cupc-edmonton.jpg","Poster discussion at CUPC 2018 conference in Edmonton, Canada."],
            ["images/dsqc-conference.jpeg","Data Science and Quantum Computing workshop at TRIUMF, Canada."],
            ["images/dnp-pittsburgh2.jpg", "Poster presentation during APS DNP in Pittsburgh, U.S.A."],
            ["images/san-marino-church.jpg", "Church in the Republic of San Marino."],
            ["images/roman-ruins.jpg", "Roman ruins in Palmera, Syria."],
            ["images/syria-storm.jpg", "Sandstorm sunset in Aleppo, Syria."],
            ["images/algonquin-park.jpeg", "Canoeing in Algonquin Park, Canada."],
            ["images/whistler-ziplining.jpg", "Ziplining in Whistler Mountain, British Columbia."],
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

    myWebpage.controller("publicationsController", function () {
        this.researchSection = "Publications";
        this.researchPapers = [
            ["https://arxiv.org/abs/1712.02879", "M. Gennari, M. Vorabbi, A. Calci, and P. Navrátil. Phys. Rev. C 97, 034619 (2018)"],
            ["https://arxiv.org/abs/1808.10537", "M. Gennari and P. Navrátil. arXiv:1808.10537 (2018)"]
        ];
        this.prespostSection = "Presentations and posters";
        this.prespostList = [
            ["research/presentations/CUPC-S18-pres.pdf", "Canadian Undergraduate Physics Conference 2018 Presentation - University of Alberta, Canada."],
            ["research/presentations/CUPC-S18-poster.pdf", "Canadian Undergraduate Physics Conference 2018 Poster - University of Alberta, Canada."],
            ["research/presentations/dreb2018-poster.pdf", "Direct Reactions with Exotic Beams 2018 Poster - Matsue, Japan."],
            ["research/presentations/ab-initio-wrkshp-pres-W18.pdf", "Progress in Ab Initio Techniques in Nuclear Physics 2018 Presentation - TRIUMF, Canada."],
            ["research/presentations/ab-initio-wrkshp-poster-W18.pdf", "Progress in Ab Initio Techniques in Nuclear Physics 2018 Poster - TRIUMF, Canada."],
            ["research/presentations/DNP_CEU_poster-F18.pdf", "APS Division of Nuclear Physics Meeting 2017 Poster - Pittsburgh, U.S.A."],
            ["research/presentations/three_min_thesis.pdf", "Three Minute Thesis Competition 2017 Presentation - TRIUMF, Canada"],
            ["research/presentations/nldens-acot-pres-w17.pdf", "Advisory Committee on TRIUMF Theory Group 2017 Presentation - TRIUMF, Canada"],
        ];
        this.reportSection = "Work reports";
        this.workReports = [
            ["research/work_reports/kdens.pdf", "Gennari, M. (2018). Kinetic density from ab initio theory. TRIUMF, Theory Group. UBC, Vancouver, British Columbia."],
            ["research/work_reports/chiralEFT_2B3Bint.pdf", "Gennari, M. (2017). Analysis of recent two- and three-body nuclear interactions. TRIUMF, Theory Group. UBC, Vancouver, British Columbia."],
            ["research/work_reports/trinv_nlocdens.pdf", "Gennari, M. (2017). Nonlocal Translationally Invariant Nuclear Density. TRIUMF, Theory Group. UBC, Vancouver, British Columbia."],
            ["research/work_reports/MathCentreWR.pdf", "Gennari, M. (2016). Evaluating the Effectiveness of Math Centre Advertising Methods. Humber College Math Centre. Humber College, Toronto, Ontario."],
            ["research/work_reports/MathCentreSIRF.pdf", "Gennari, M. (2016). Humber Math Centre SIRF Summary Report. Humber College Math Centre. Humber College, Toronto, Ontario."]
        ];
    });

    myWebpage.controller("resumeController", function () {
        this.myResumes = [
            ["resumes/cv-mgennari-Sep2018.pdf", "Michael Gennari's Curriculum Vitae (Updated September 2018)"],
            ["resumes/General Resume April 2018.pdf", "Michael Gennari's Resume (Updated June 2018)"],
        ];
    });

    myWebpage.controller("contactMeController", function () {
        this.emails = [
            ["Personal: ", "mgennari5216@gmail.com"],
            ["Waterloo Email: ", "mgennari@edu.uwaterloo.ca"],
            ["TRIUMF Email: ", "mgennari@triumf.ca"],
        ];
    });

    myWebpage.controller("myCopyrightController", function () {
        this.name = "Michael Gennari";
        this.currYear = '2018';
    });

    //Directives in order of appearance

    myWebpage.directive("headerDesign", function () {
        return {
            restrict: "E",
            templateUrl: "html/header-design.html",
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
            templateUrl: "html/main-tabs.html",
            controller: "allTabs",
            controllerAs: 'tabs',
        };
    });

    myWebpage.directive("travelSlider", function () {
        return {
            restrict: "E",
            templateUrl: "html/travel-photos-slider.html",
            controller: "photosController",
            controllerAs: "photos"
        }
    });

    myWebpage.directive("myCopyright", function () {
        return {
            restrict: "E",
            templateUrl: "html/my-copyright.html",
            controller: "myCopyrightController",
            controllerAs: "copyrightCtrl"
        }
    });

})();