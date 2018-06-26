(function () {

    //Modules in order of their appearance
    var myWebpage = angular.module('myPage', []);

    //Controllers in order of appearance
    myWebpage.controller("allTabs", function () {
        this.tab = 1;
        this.numTabs = 4;
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
            ["Advanced background in nuclear theory from research in TRIUMF's Theory Group"],
            ["Proficient in several programming languages such as FORTRAN, Python, R"],
            ["Experienced in communicating advanced content in mathematics and physics to varying audiences"]
        ]
    });

    myWebpage.controller("photosController", function () {
        this.images = [
            ["images/japan-garden.jpg","Japanese Garden, DREB 2018 Conference."],
            ["images/dnp-pittsburgh.jpg","APS DNP in Pittsburgh, USA."],
            ["images/roman-ruins.jpg", "Roman ruins in Palmera, Syria."],
            ["images/syria-storm.jpg", "Sandstorm sunset near Aleppo, Syria."],
            ["images/san-marino-church.jpg", "The Republic of San Marino."],
            ["images/algonquin-park.jpeg", "Algonquin Park, Canada."],
            ["images/whistler-ziplining.jpg", "Whistler Mountain, British Columbia."],
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
        this.nlocdens = [
            ["images/research/He4_nloc_ndens_gscompNNn4lo5003Nloc650nonloc500.png", "There have been substantial advancements in ab initio techniques in nuclear theory, allowing us to extract crucial quantities from our many-body wavefunctions. Nonlocal nuclear densities can provide insight into nuclear structure, act as input for optical potentials at high energy, and are a central object of density functional theory."],
            ["images/research/4He_200MeV_local_nonlocal.png", "A nonlocal translationally invariant (trinv) nuclear density is required for realistic calculations. The act of centre of mass (wiCOM) removal generates a more physically accurate density, and a nonlocal form of the density operator (instead of local density) is a more fundamental object to work with. Here we show differences between the COM contaminated density and the translationally invariant density for light nuclei in generating differential cross sections. One can clearly see the significance of COM removal in calculations involving light nuclei. These calculations can be performed for more exotic systems, such as the halo nuclei He-6,8. The recent prediction of experimental results for He-6 at 200 MeV has further credited the accuracy of the model."],
        ];
        this.kdens = [
            ["images/research/O16_nkdens_gscompNNn4lo5003Nloc650nonloc500.png", "Nuclear densities are a fundamental object of density functional theory (DFT), the objective of which is to minimize an energy functional written in terms of varying densities (charge, spin, isospin, etc.). The COM contamination effects are reduced in larger A-nucleon systems, however if DFT is to extend it's reach to lighter systems the contamination in the theory must be systematically studied. The derivation of the kinetic density (shown to the left) from ab initio wavefunctions allows us to begin to gauge the importance of translational invariance in the energy functionals."],
        ];
        this.natorbs = [
            [],
        ];
    });

    myWebpage.controller("publicationsController", function () {
        this.researchSection = "Published Papers";
        this.researchPapers = [
            ["research/papers/opdens.pdf", "M. Gennari, M. Vorabbi, A. Calci, and P. Navrátil, Phys. Rev. C 97, 034619 (2018)"]
        ];
        this.prespostSection = "Presentations and Posters";
        this.prespostList = [
            ["research/presentations/dreb2018-poster.pdf", "Direct Reactions with Exotic Beams 2018 Poster, TRIUMF"],
            ["research/presentations/ab-initio-wrkshp-pres-W18.pdf", "Progress in Ab Initio Techniques in Nuclear Physics 2018 Presentation, TRIUMF"],
            ["research/presentations/ab-initio-wrkshp-poster-W18.pdf", "Progress in Ab Initio Techniques in Nuclear Physics 2018 Poster, TRIUMF"],
            ["research/presentations/DNP_CEU_poster-F18.pdf", "APS Division of Nuclear Physics Meeting 2017 Poster, Pittsburgh, USA."],
            ["research/presentations/three_min_thesis.pdf", "Three Minute Thesis Competition 2017 Presentation at TRIUMF"],
            ["research/presentations/nldens-acot-pres-w17.pdf", "Advisory Committee on TRIUMF Winter 2017 Presentation, Theory Group"],
        ];
        this.reportSection = "Work Reports";
        this.workReports = [
            ["research/work_reports/Analysis2B3Bchiral.pdf", "Gennari, M. (2018). Analysis of recent two- and three-body nuclear interactions. TRIUMF, Theory Group. UBC, Vancouver, British Columbia."],
            ["research/work_reports/NonlocalTRINVDensity-MKI.pdf", "Gennari, M. (2017). Nonlocal Translationally Invariant Nuclear Density. TRIUMF, Theory Group. UBC, Vancouver, British Columbia."],
            ["research/work_reports/MathCentreWR.pdf", "Gennari, M. (2016). Evaluating the Effectiveness of Math Centre Advertising Methods. Humber College Math Centre. Humber College, Toronto, Ontario."],
            ["research/work_reports/MathCentreSIRF.pdf", "Gennari, M. (2016). Humber Math Centre SIRF Summary Report. Humber College Math Centre. Humber College, Toronto, Ontario."]
        ];
    });

    myWebpage.controller("resumeController", function () {
        this.myResumes = [
            ["resumes/General Resume April 2018.pdf", "Michael Gennari's Resume (Updated June 2018)"],
            ["resumes/General CV April 2018.pdf", "Michael Gennari's Curriculum Vitae (Updated June 2018)"],
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