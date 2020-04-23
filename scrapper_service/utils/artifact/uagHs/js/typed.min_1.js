<!DOCTYPE html><html lang="en"><head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script type="text/javascript" async src="analytics.js"></script><script async src="../js_1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-141028980-1');
    </script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Alan Wu</title>

    <link rel="shortcut icon" type="image/x-icon" href="../favicon.ico">

    <script src="jquery.min_5.js"></script>
    <script src="bootstrap.min_5.js"></script>

    <script>
        $(function() {

            var y = document.getElementById("myVideo");
            var x = document.getElementById("intro3");
            var z = document.getElementById("aaa");
            var r = document.getElementById("myVideo");
            var declineButton = document.getElementById("declineid");
            var welcometext = document.getElementById("welcometext");


            $("#showcase-type").typed({
                strings: [" = Engineer ",
                    " = Full Stack Developer;", " = Taiwanese", "= Wide Receiver", " = Snowboard Instructor", " = Magician", "= Music Producer"
                ],
                typeSpeed: 80,
                loop: !0,
                backDelay: 60,
                cursorChar: ""
            });


            $("#showcase-type1").typed({
                strings: ["Create Innovate Passionate"],
                typeSpeed: 120,
                loop: !0,
                backDelay: 100,
                cursorChar: ""
            });

            console.log($("myVideo"))

            $(document).ready(function() {
                declineButton.style.visibility = "hidden";
                welcometext.style.visibility = "visible"
                z.innerHTML = "Connecting"
                setTimeout(function() {
                    intro3.style.display = "none";
                    welcometext.style.visibility = "visible"
                    y.style.visibility = "visible";
                    y.currentTime = 0;
                    r.play();
                    $("myVideo").trigger("play");
                }, 1200);


            });




            $(function() {


                x.addEventListener("click", displayDate = () => {
                    z.innerHTML = "Connecting"
                    declineButton.style.visibility = "hidden";
                    setTimeout(function() {
                        intro3.style.display = "none";
                        welcometext.style.visibility = "visible"
                        y.style.visibility = "visible";
                        y.currentTime = 0;
                        y.play();
                    }, 1000);

                });

                r.addEventListener("click", goBack = () => {
                    z.innerHTML = "Incoming Video Message";
                    intro3.style.display = "";
                    y.style.visibility = "hidden";
                    welcometext.style.visibility = "visible"
                    declineButton.style.visibility = "visible";

                })


            });



            $(function() {
                $('.cwt__main-menu a').on('click', function() {
                    $('.cwt__main-menu a').removeClass('cwt__main-menu__link--active');
                    $(this).addClass('cwt__main-menu__link--active');
                });

                $('.cwt__js-click__preview').on('click', function() {
                    $.scrollTo($('.cwt__preview__container'), 1000);
                });

                $('.cwt__js-click__coop').on('click', function() {
                    $.scrollTo($('.cwt__action'), 1000, {
                        offset: -100
                    });
                });

                $('.cwt__js-click__features').on('click', function() {
                    $.scrollTo($('.cwt__features'), 1000, {
                        offset: -100
                    });
                });

                $('.cwt__js-click__gallery').on('click', function() {
                    $.scrollTo($('.cwt__gallery'), 1000, {
                        offset: -100
                    });
                });
                $('.cwt__js-click__music').on('click', function() {
                    $.scrollTo($('.cwt__music'), 1000, {
                        offset: -100
                    });
                });
            });

        });

        function bptrigger() {
            $("#mybfVideo").toggle("slow")
        }
    </script>


    <style>
        @import url(../css/css.css);
        html,
        body {
            height: 100%
        }
        
        .logo {
            text-align: ;
            width: 85%;
            height: 270px;
            margin-left: ;
        }
        
        .logo b {
            font: 10 11vh "Vibur";
            color: #fee;
            text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;
        }
        
        .logo b span {
            animation: blink linear infinite 2s;
        }
        
        @keyframes blink {
            78% {
                color: inherit;
                text-shadow: inherit;
            }
            79% {
                color: #333;
            }
            80% {
                text-shadow: none;
            }
            81% {
                color: inherit;
                text-shadow: inherit;
            }
            82% {
                color: #333;
                text-shadow: none;
            }
            83% {
                color: inherit;
                text-shadow: inherit;
            }
            92% {
                color: #333;
                text-shadow: none;
            }
            92.5% {
                color: inherit;
                text-shadow: inherit;
            }
        }
        /* follow me @nodws */
        
        #btn-twtr {
            clear: both;
            color: #fff;
            border: 2px solid;
            border-radius: 3px;
            text-align: center;
            text-decoration: none;
            display: block;
            font-family: sans-serif;
            font-size: 14px;
            width: 13em;
            padding: 5px 10px;
            font-weight: 600;
            position: absolute;
            bottom: 20px;
            left: 0;
            right: 0;
            margin: 0 auto;
            background: rgba(0, 0, 0, 0.2);
            box-shadow: 0 0 0px 3px rgba(0, 0, 0, 0.2);
            opacity: 0.4
        }
        
        #btn-twtr:hover {
            color: #fff;
            opacity: 1
        }
        
        @import url(../css/css_1.css);
        *,
        *:before,
        *:after {
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Lato', sans-serif;
            font-size: 2em;
        }
        
        div.foo {
            width: 90%;
            margin: 0 auto;
            text-align: center;
        }
        
        .letter {
            display: inline-block;
            font-weight: 900;
            font-size: 4em;
            margin: 0.4em;
            position: relative;
            color: #5e707e;
            transform-style: preserve-3d;
            perspective: 400;
            z-index: 1;
        }
        
        .letter:before,
        .letter:after {
            position: absolute;
            content: attr(data-letter);
            transform-origin: top left;
            top: 0;
            left: 0;
        }
        
        .letter,
        .letter:before,
        .letter:after {
            transition: all 0.3s ease-in-out;
        }
        
        .letter:before {
            color: #fff;
            text-shadow: -1px 0px 1px rgba(255, 255, 255, .8), 1px 0px 1px rgba(0, 0, 0, .8);
            z-index: 3;
            transform: rotateX(0deg) rotateY(-15deg) rotateZ(0deg);
        }
        
        .letter:after {
            color: rgba(0, 0, 0, .11);
            z-index: 2;
            transform: scale(1.08, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 1deg);
        }
        
        .letter:hover:before {
            color: #fafafa;
            transform: rotateX(0deg) rotateY(-40deg) rotateZ(0deg);
        }
        
        .letter:hover:after {
            transform: scale(1.08, 1) rotateX(0deg) rotateY(40deg) rotateZ(0deg) skew(0deg, 22deg);
        }
        
        .blink {
            animation: blink-animation 1s steps(5, start) infinite;
            -webkit-animation: blink-animation 1s steps(5, start) infinite;
        }
        
        @keyframes blink-animation {
            to {
                visibility: hidden;
            }
        }
        
        @-webkit-keyframes blink-animation {
            to {
                visibility: hidden;
            }
        }
        
        section {
            margin: 0;
            background: yellow;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%)
        }
        
        .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            /*            background: #000;     */
            transition: 1s;
            z-index: 11;
        }
        
        .preloader:before {
            content: "";
            position: absolute;
            left: 0;
            width: 50%;
            height: 100%;
            background: #000;
            transition: 1s;
        }
        
        .preloader.complete:before {
            left: -50%;
        }
        
        .complete {}
        
        .preloader:after {
            content: "";
            position: absolute;
            right: 0;
            width: 50%;
            height: 100%;
            background: #000;
            transition: 1s;
        }
        
        .preloader.complete:after {
            right: -50%;
        }
        
        .lds-ellipsis {
            display: inline-block;
            position: relative;
            width: 64px;
            height: 64px;
            display: absolute;
            top: 66%;
            left: 44%;
            z-index: 12;
        }
        
        .lds-ellipsis div {
            position: absolute;
            top: 27px;
            width: 11px;
            height: 11px;
            border-radius: 50%;
            background: #fff;
            animation-timing-function: cubic-bezier(0, 1, 1, 0);
        }
        
        .lds-ellipsis div:nth-child(1) {
            left: 6px;
            animation: lds-ellipsis1 0.6s infinite;
        }
        
        .lds-ellipsis div:nth-child(2) {
            left: 6px;
            animation: lds-ellipsis2 0.6s infinite;
        }
        
        .lds-ellipsis div:nth-child(3) {
            left: 26px;
            animation: lds-ellipsis2 0.6s infinite;
        }
        
        .lds-ellipsis div:nth-child(4) {
            left: 45px;
            animation: lds-ellipsis3 0.6s infinite;
        }
        
        @keyframes lds-ellipsis1 {
            0% {
                transform: scale(0);
            }
            100% {
                transform: scale(1);
            }
        }
        
        @keyframes lds-ellipsis3 {
            0% {
                transform: scale(1);
            }
            100% {
                transform: scale(0);
            }
        }
        
        @keyframes lds-ellipsis2 {
            0% {
                transform: translate(0, 0);
            }
            100% {
                transform: translate(19px, 0);
            }
        }
        
        .no-js .preloader {
            display: none;
        }
        
        iframe:focus {
            outline: none;
        }
        
        iframe[seamless] {
            display: block;
        }
        
        iframe {
            width: 100%;
            height: 80vh;
            border: none;
            overflow: hidden;
        }
    </style>


<style type="text/css">#mc_embed_signup input.mce_inline_error { border-color:#6B0505; } #mc_embed_signup div.mce_inline_error { margin: 0 0 1em 0; padding: 5px 10px; background-color:#6B0505; font-weight: bold; z-index: 1; color:#fff; }</style></head>

<body style="zoom: 1;">
    <link href="../css/css_2.css" rel="stylesheet" type="text/css">

    <link rel="stylesheet" type="text/css" href="../css/bootstrap.min_5.css">

    <link rel="stylesheet" type="text/css" href="../css/main_5.css">

    <link rel="shortcut icon" type="image/x-icon" href="../favicon.ico">
    <link rel="shortcut icon" type="image/x-icon" href="../favicon.ico">

    <script async src="jquery.min_5.js"></script>
    <script async src="bootstrap.min_5.js"></script>
    <script async src="typed.min_5.js"></script>
    <script async asrsrc="assets/vendors/three/build/three.min.js"></script>
    <script async src="jquery.scrollTo.min_5.js"></script>
    <script async src="tether.min_5.js"></script>

    <script>
        $(document).ready(function() {
            setTimeout(function() {
                $(".lds-ellipsis").hide()
            }, 500);

            $('.preloader').addClass('complete')
            setTimeout(function() {
                $('.preloader').hide()
            }, 900);
            setTimeout(function() {
                $("#headernav").slideDown("slow")
            }, 900);
        })
        $(function() {


            $("#showcase-type").typed({
                strings: ["=👷Engineer",
                    "=🖥️Developer;", "=🇹🇼Taiwanese", "=🏈Wide Receiver", "=🏂Snowboarder", "=♠️Magician", "=🎵Music Producer"
                ],
                typeSpeed: 70,
                loop: !0,
                backDelay: 60,
                cursorChar: "✍️"
            });

        });
    </script>

    <style>
        .cwt__block {
            background: white;
        }
    </style>

    <div class="preloader">

        <!--
        <div class="lds-ellipsis"> <span style="color:white;position: absolute; top: 49px; left: -105px;"> Things may come to those who wait, but only the things left by those who hustle
 </span>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
-->


    </div>



    <!-- Header Block Full -->
    <div class="cwt__block cwt__header-fixed" id="headernav" style="display: none;">
        <div class="container">
            <div class="cwt__header-fixed__container">
                <div class="row">
                    <div class="col-xs-3">
                        <div class="cwt__logo cwt__logo--small">
                            <a href="index.html" class="logo1">
                                <img class="logo1" src="../images/Capture-min.JPG_5.jpg" alt="Alan Wu">
                            </a>
                        </div>
                    </div>
                    <div class="col-xs-9">
                        <nav class="nav nav-inline pull-xs-right cwt__main-menu cwt__main-menu--dark">
                            <div class="cwt__mobile-menu">
                                <a href="javascript: void(0);" class="nav-link cwt__main-menu__link cwt__js-click__features"> About Me </a>

                                <a href="javascript: void(0);" class="nav-link cwt__main-menu__link cwt__js-click__gallery">Portfolio </a>


                                <a href="javascript: void(0);" class="nav-link cwt__main-menu__link cwt__js-click__coop"> Work </a>

                                <a href="javascript: void(0);" class="nav-link cwt__main-menu__link cwt__js-click__music"> Music </a>

                                <span style="padding-right: 10px; padding-left: 15px;"> <a href="https://github.com/alanwu4321" target="_blank" class="icmn-github"></a> </span>
                                <span style="padding-right: 5px;"> <a href="https://www.linkedin.com/in/alan-wu-36b668157/" target="_blank" class="fl lnr icmn-linkedin"></a></span>

                            </div>
                            <a href="javascript: void(0);" class="nav-link btn btn-secondary cwt__main-menu__link cwt__main-menu__link--button" data-toggle="modal" data-target="#exampleModal">Contact Me</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="container" id="welcometext" style="visibility:vidden; display: inline-block; display: flex;
  align-items: center;
  justify-content: center; ">

        <h1 class="display-3 text-center" style="text-align: center; font-size: 2em; margin-bottom:auto; margin-top:25%; " id="alantext"><span class="letter" data-letter="A">A</span> <span class="letter" data-letter="L">L</span><span class="letter" data-letter="A">A</span><span class="letter" data-letter="N">N</span><br>

        </h1>

        <br>


    </div>

    <div class id="welcometext" style="visibility:vidden; display: inline-block; display: flex;
  align-items: center;
  justify-content: center; ">
        <div class="logo" style="margin-left: 20%; margin-bottom: 10%"><b>a<span>l</span>a<span>n</span>wu</b></div>
        <h1 class="display-3 text-center" style="  text-align: center; font-size: 2.3em; margin-bottom:auto; margin-top:auto; margin-right:23%"> <span class id="showcase-type1"></span>
        </h1>





    </div>






    <!--
    <div class="herovid cwt__preview__container lgo">
        <div clas="container" style="margin-top: auto; display: inline-block; display: flex;
  align-items: center;
  justify-content: center;">
            <h1 style="margin-top:20%" class="intro" id="intro3" style="position: absolute;
        top:120px;
    left:59px;
		font: 28vw Verdana, Sans-Serif;
		letter-spacing: -5px;
		color: rgba(0,0,255,0.5);"><span style="font: 7vw Helvetica, Sans-Serif;
		letter-spacing: -1px;
		color: rgba(0,0,255,0.5);
   z-index: -1;">
                    <h1 class="intro1 blink"
                        style="   color:#5e707e; z-index: -1 color: black; font: 5vw Her, Sans-Serif; font-weight: 600"
                        id="aaa"> Incoming <span class="intro5 blink logo">Video</span> Message </h1>
                </span>
                <span>
                    <h1 class="icmn-phone2" style=" margin-left: 20%; color:darkgreen; animation: shake 1.5s;  animation-iteration-count: infinite; opacity:0.5; font-size: 6vw; display: inline-block;
  border-radius: 460px;
   box-shadow: 2px 5px 8px #888;
  padding: 0.4em 0.4em; margin-top: 30%"></h1>
                    <h1 class="icmn-phone-hang-up" id="declineid" style="margin-left: 20%; color:red; opacity:0.5; animation: shake 1.5s;  animation-iteration-count: 1; font-size: 6vw; display: inline-block;
  border-radius: 2660px;
   box-shadow: 2px 5px 8px #888;
        padding-right: 0.5em;
            padding-top:0.4em;
            padding-left: 0.4em;
            padding-bottom: 0.4em; margin-top: 30%"></h1>
                </span>

            </h1>

        </div>
        <video class="videoisme" muted autoplay playsinline id="myVideo" style="visibility:hidden">
            <source src="./assets/common/img/vid.mp4" type="video/mp4">
        </video>


    </div>
-->





    <div class style="margin-top: 5%;">
        <div class="row">
            <div class="cwt__block cwt__main-header" style="display: none;">
                <div class="row">
                    <div class="col-xs-3">
                        <div class="cwt__logo">
                            <a href="index.html"> <img src="../images/logo_5.png" alt="Clean UI Admin Template + Free Ultimate Premium Bundle + Landing Pages + BEM + Angular2 Starter Kit">
                            </a>
                        </div>
                    </div>
                    <div class="col-xs-9">
                        <nav class="nav nav-inline pull-xs-right cwt__main-menu">
                            <div class="cwt__mobile-menu"> <a href="javascript: void(0);" class="nav-link cwt__main-menu__link cwt__main-menu__link--active cwt__js-click__information">Teaser</a>
                                <a href="javascript: void(0);" class="nav-link cwt__main-menu__link cwt__js-click__versions">Portfolio</a> <a href="javascript: void(0);" class="nav-link cwt__main-menu__link cwt__js-click__features">Features</a>
                                <a href="javascript: void(0);" class="nav-link cwt__main-menu__link cwt__js-click__features">About Us</a>
                            </div><a href="javascript: void(0);" class="nav-link btn btn-primary cwt__main-menu__link cwt__main-menu__link--button">Contact
                                Us</a>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="cwt__block cwt__features">
                <h1 class="cwt__block-title"> About Me </h1>
                <div class="cwt__gallery__description"> Hi there, my name is Alan! <br> Click 👉 <span><a class="cwt__link-underlined" style="color:#0275d8; font-weight: 700; cursor:pointer;" id="bpTrigger" onclick="bptrigger()"> Here </a></span> for a footage of me <strong> landing a bottle flip </strong>                    in front of <strong> 250+ </strong> people </div>

                <div class="row" style="text-align: center;">

                    <div class="container">
                        <video playsinline loop controls preload="auto" id="mybfVideo" style="outline: 0; display:none;">
                            <source src="../media/bf_5.mp4" type="video/mp4">
                        </video>
                    </div>

                </div>
                <div class="cwt__features__container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="cwt__features__item"> <i class="cwt__features__icon lnr lnr-code"></i> <span class="cwt__features__title"> Coding </span>
                                <div class="cwt__features__descr"> Full Stack Software Developer who loves creating and problem solving </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="cwt__features__item"> <i class="cwt__features__icon lnr icmn-wave2"></i> <span class="cwt__features__title"> Surfing &amp; Snowboarding </span>
                                <div class="cwt__features__descr"> Happiness comes in wave. </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="cwt__features__item"> <i class="cwt__features__icon lnr lnr-music-note"></i> <span class="cwt__features__title"> Music Production </span>
                                <div class="cwt__features__descr"> 7 years of Piano and Violin. <br> Click <span> <a href="javascript: void(0);" class="cwt__js-click__music cwt__link-underlined"> Here </a> </span> for the first song I made. </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="cwt__features__item"> <i class="cwt__features__icon icmn-football"></i> <span class="cwt__features__title"> Sports </span>
                                <div class="cwt__features__descr"> Varsity Football, Basketball and Rugby </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="cwt__features__item"> <i class="cwt__features__icon lnr lnr-magic-wand"></i> <span class="cwt__features__title"> Magic Tricks </span>
                                <div class="cwt__features__descr"> Card, Coin, Rubber Band tricks. I also wrote a 4000 words academic essay on magic as a methodology in psychology.</div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="cwt__features__item"> <i class="cwt__features__icon icmn-dumbbell"></i> <span class="cwt__features__title"> Workout </span>
                                <div class="cwt__features__descr"> Train not only my body, but also my mind. Btw I can bench two plates (225lb). </div>
                            </div>
                        </div>
                    </div>

                    <video class="videoisme" muted autoplay playsinline loop preload="auto" id="myVideo" style="visibility:visible;">
                        <source src="../media/vid%20copy_5.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
            <div class="cwt__block cwt__showcase cwt__utils__p-t-100">
                <div class="cwt__cube">
                    <div class="cwt__cube__inner" id="rotating-cube"></div>
                </div>
                <h1 class="cwt__showcase__heading"> Alan <span class="cwt__showcase__heading__text" id="showcase-type"></span> </h1>
                <p class="cwt__showcase__description"> An independent and self-motivated engineer with a split focus in
                    <strong>Software</strong>,<strong> Optimization</strong>, and <strong>Finance</strong> </p>
                <div class="cwt__showcase__devices">
                    <div class="cwt__showcase__laptop">
                        <div class="cwt__showcase__laptop__shadow"></div>
                        <div class="cwt__showcase__laptop__bg">
                            <div class="cwt__showcase__box"> <img src="../images/laptop_5.gif" class="cwt__showcase__box__gif"> </div>
                        </div>
                    </div>
                    <div class="cwt__showcase__mobile hidden-sm-down">
                        <div class="cwt__showcase__box"> <img src="../images/brain1_5.gif" class="cwt__showcase__box__gif" alt="Coming Up"> </div>
                    </div>
                </div>
            </div>

            <div class="cwt__block cwt__promo hidden-md-down">
                <div class="cwt__promo__images cwt__promo__images--showed">
                    <a href="javascript: void(0);" class="cwt__promo__images__img cwt__promo__images__img--1"> <img src="../images/promo_1_5.jpg" alt> </a>
                    <a href="javascript: void(0);" class="cwt__promo__images__img cwt__promo__images__img--1"> <img src="../images/promo_1_5.jpg" alt> </a>
                    <a href="javascript: void(0);" class="cwt__promo__images__img cwt__promo__images__img--1"> <img src="../images/promo_1_5.jpg" alt> </a>
                    <a href="javascript: void(0);" class="cwt__promo__images__img cwt__promo__images__img--2"> <img src="../images/promo_2_5.jpg" alt> </a>
                    <a href="http://www.pacificfreshproduce.com/" target="_blank" class="cwt__promo__images__img cwt__promo__images__img--3"> <img src="../images/PFP.JPG_5.jpg" alt> </a>
                    <a href="javascript: void(0);" class="cwt__promo__images__img cwt__promo__images__img--4"> <img src="../images/Capture.JPG_5.jpg" alt> </a>
                    <a href="javascript: void(0);" class="cwt__promo__images__img cwt__promo__images__img--5"> <img src="../images/Capture1.JPG_5.jpg" alt> </a>
                </div>
            </div>


            <div class="cwt__block cwt__gallery">
                <h1 id="test" class="cwt__block-title"> Portfolio </h1>
                <div class="cwt__gallery__container">
                    <div class="cwt__gallery__description"> Some are still in <strong>Pr<a href="https://github.com/alanwu4321" target="_blank" class="icmn-github" style="color: ;"></a>gress</strong> </div>
                    <div class="row">
                        <div class="col-md-4">
                            <a href="https://asianglow-index.com/" target="_blank" class="cwt__gallery__item"> <img src="../images/brain2_5.gif" alt="Ml" class="cwt__gallery__item__img">
                                <div class="cwt__gallery__item__overlay"></div><span class="btn btn-primary cwt__gallery__item__btn">Click for Live Preview</span>
                            </a> <br> <a href="https://asianglow-index.com/" target="_blank" class="cwt__gallery__item__title cwt__link-underlined">Face Recognition 🤓</a>

                            <div class="card-body" style="padding-top: 5px;">
                                <p class="card-text"><small> Serverless AWS Lambda, API Gateway, S3, CloudFront and MongoDB Atlas</small></p>
                            </div>
                        </div>


                        <div class="col-md-4">
                            <a href="https://www.pacificfirstaid.ca/" class="cwt__gallery__item">
                                <img src="../images/PFA1_5.gif" alt="Loading" class="cwt__gallery__item__img">
                                <div class="cwt__gallery__item__overlay"></div><span target="_blank" class="btn btn-primary cwt__gallery__item__btn">Click for Live Preview</span>
                            </a> <br> <a href="https://www.pacificfirstaid.ca/" target="_blank" class="cwt__gallery__item__title cwt__link-underlined">eCommerce 🏪</a>
                            <div class="card-body" style="padding-top: 5px;">
                                <p class="card-text"><small>PHP, HTML5, CSS3, JavaScript, MySQL, Google Analytics</small></p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <a href="https://kiosk.alan-wu.com/" class="cwt__gallery__item"> <img src="../images/PFP_5.gif" alt="Loading" class="cwt__gallery__item__img"><span class="btn btn-primary cwt__gallery__item__btn">Under maintenance ... </span>
                                <div class="cwt__gallery__item__overlay"></div>
                            </a> <br>
                            <a href="https://kiosk.alan-wu.com/" class="cwt__gallery__item__title cwt__link-underlined ">Landing Page 📄</a>
                            <div class="card-body" style="padding-top: 5px;">
                                <p class="card-text"><small>PHP, HTML5, CSS3, JavaScript</small></p>
                            </div>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-md-4">
                            <a href="https://kiosk.alan-wu.com/" target="_blank" class="cwt__gallery__item"> <span class="btn btn-primary cwt__gallery__item__btn">Click
                                    for Live Preview</span><img src="../images/ezgif.com-resize_5.gif" alt="Loading" class="cwt__gallery__item__img">
                                <div class="cwt__gallery__item__overlay"></div>
                            </a> <br> <a href="https://kiosk.alan-wu.com/" target="_blank" class="cwt__gallery__item__title cwt__link-underlined">Kiosk 🤳</a>

                            <div class="card-body" style="padding-top: 5px;">
                                <p class="card-text"><small>ReactJS</small></p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <a href="https://github.com/alanwu4321" target="_blank" class="cwt__gallery__item"> <span class="btn btn-primary cwt__gallery__item__btn">In Progress ... </span><img src="../images/rych_5.png" alt="Loading" class="cwt__gallery__item__img">
                                <div class="cwt__gallery__item__overlay"></div>
                            </a> <br> <a href="https://github.com/alanwu4321" target="_blank" class="cwt__gallery__item__title cwt__link-underlined">RideShare 🚗</a>

                            <div class="card-body" style="padding-top: 5px;">
                                <p class="card-text"><small>Kubernetes, ElasticSearch, Nginx on AWS EC2, EBS, ELB, MongoDB, NodeJS, React Native</small></p>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <a href="https://github.com/alanwu4321" target="_blank" class="cwt__gallery__item"> <span class="btn btn-primary cwt__gallery__item__btn">In Progress ... </span><img src="../images/chatbot_5.png" alt="Loading" class="cwt__gallery__item__img">
                                <div class="cwt__gallery__item__overlay"></div>
                            </a> <br> <a href="https://github.com/alanwu4321" target="_blank" class="cwt__gallery__item__title cwt__link-underlined">Chatbot 🤖</a>

                            <div class="card-body" style="padding-top: 5px;">
                                <p class="card-text"><small>Ruby on Rails, MySQL, Redis, Gitlab, JIRA, Jenkins, Azure ML Natural Language Understanding services</small></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <div class="cwt__block cwt__action" style="margin-top: 18px; z-index: 100000;">
                <div class="cwt__action__container">
                    <div class="cwt__action__container-inner"> <a href="https://alan-wu.com/resume" target="_blank" class="btn btn-primary cwt__action__button"> My Resume<br><small>Click Me</small> </a> </div>
                </div>
            </div>
            <div class="cwt__block cwt__feedback">
                <h1 class="cwt__block-title">WORK EXPERIENCE </h1>
                <div class="cwt__gallery__description"> Seeking 2020 Summer Internship </div>
                <div class="cwt__feedback__container" style="padding-left: 0px;padding-right: 0;">
                    <div class="cwt__feedback__container__stars"> <i class="icmn-star-full2"></i> <i class="icmn-star-full2"></i> <i class="icmn-star-full2"></i> </div>
                    <div class="container-audio" style="width: 100%">
                        <div class="cwt__features__descr">
                            <ul style="list-style: circle;">
                                <li class="p-3">Built on top of <strong> Kubernetes </strong>deployments with 80+ clusters and 500 services in <strong> Golang and Ruby </strong></li>
                                <li class="p-3">Developed<strong> infrastructure and automation </strong> for all Shopify apps to have <strong> high mobility </strong>over clusters and regions </li>
                                <li class="p-3">Improved <strong> fault tolerance and incident response </strong> for the platform that handles
                                    <strong> 100,000 requests per second </strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="cwt__feedback__user">
                    <div class="cwt__feedback__user__title"> Shopify<span>, Software Engineer - Cloud Infrastructure / Production </span> </div>
                </div>
                <div class="cwt__feedback__container" style="padding-left: 0px;padding-right: 0;">
                    <div class="cwt__feedback__container__stars"> <i class="icmn-star-full2"></i> <i class="icmn-star-full2"></i> <i class="icmn-star-full2"></i> </div>
                    <div class="container-audio" style="width: 100%">
                        <div class="cwt__features__descr">
                            <ul style="list-style: circle;">
                                <li class="p-3"><strong> Rails microservices </strong>for cloud computing, monitoring, cost management, and DevOps services </li>
                                <li class="p-3">Implemented TDD and <strong> Jenkins CI </strong> front and back-end API testing using <strong> Rspec </strong>Rspec and <strong> Capybara </strong> </li>
                                <li class="p-3">Built an <strong> AI chat-bot </strong> with <strong> Natural Language
                                        Processing </strong> and APIs to streamline <strong> CI/CD </strong> and facilitate
                                    <strong> Agile development </strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="cwt__feedback__user">
                    <div class="cwt__feedback__user__title"> Blackberry <span>, Full Stack Developer </span> </div>
                </div>

                <div class="cwt__feedback__container" style="padding-left: 0px;padding-right: 0;">
                    <div class="cwt__feedback__container__stars"> <i class="icmn-star-full2"></i> <i class="icmn-star-full2"></i> <i class="icmn-star-full2"></i> </div>
                    <div class="container-audio" style="width: 100%">
                        <div class="cwt__features__descr">
                            <ul style="list-style: circle;">
                                <li class="p-3">Built a <strong> ReactJS kiosk app </strong>and developed features on eCommerce site in <strong> PHP &amp; MySQL </strong></li>
                                <li class="p-3">Developed a responsive landing page using <strong> HTML, Javascript, CSS,
                                        and Google Analytics </strong> </li>
                                <li class="p-3">Nominated for 2018 <strong> Engineering Co-op Students of the Year Awards
                                    </strong> at University of Waterloo</li>
                            </ul>
                        </div>
                    </div>
                </div>




                <div class="cwt__feedback__user">
                    <div class="cwt__feedback__user__title lead"> Pacific Fresh &amp; First Aid <span>, Junior Web &amp; eCommerce
                            Developer </span> </div>
                </div>
            </div>
            <div class="cwt__block cwt__music">
                <h1 class="cwt__block-title"> Music </h1>
                <div class="cwt__gallery__description"> Words make you think. Music makes you feel. A song makes you feel a thought. <br> Click <span><a class="cwt__link-underlined" target="_blank" style="color:#0275d8; font-weight: 700; cursor:pointer;" href="https://music.alan-wu.com"> Here </a></span>                    for a collection of songs I made </div>
                <div class="row" style="text-align: center;">
                    <div class="container">
                        <iframe src="../index_1.html">
                    <p>Your browser does not support iframes.</p>
                  </iframe>
                    </div>
                </div>
            </div>


            <div class="cwt__footer__bottom cwt__footer">
                <div class="cwt__footer__company cwt__footer__title " style="text-align: center">
                    <p> <br> ©2019 Alan Wu ❤️ <br> </p>
                </div>
            </div>


            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Leave me a Message</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
                        </div>
                        <div class="modal-body">
                            <link href="../css/classic-10_7.css" rel="stylesheet" type="text/css">
                            <style type="text/css">
                                #mc_embed_signup {
                                    background: #fff;
                                    clear: left;
                                    font: 14px Helvetica, Arial, sans-serif;
                                }
                                /* Add your own MailChimp form style overrides in your site stylesheet or in this style block. We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
                            </style>
                            <div id="mc_embed_signup">
                                <form action="https://netlify.us19.list-manage.com/subscribe/post?u=35e35f65155b9eafc80e315f4&amp;id=3513ef6b4a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="novalidate">
                                    <div id="mc_embed_signup_scroll">
                                        <div class="mc-field-group"><label for="mce-EMAIL">Email Address</label><input type="email" value name="EMAIL" class="required email" id="mce-EMAIL" aria-required="true">
                                        </div>
                                        <div class="mc-field-group"><label for="mce-FNAME">Name</label><input type="text" value name="FNAME" class="required" id="mce-FNAME" aria-required="true"></div>
                                        <div class="mc-field-group"><label for="mce-MMERGE2">Message</label><input type="text" value name="MMERGE2" class="required" id="mce-MMERGE2" aria-required="true"></div>
                                        <div id="mce-responses" class="clear">
                                            <div class="response" id="mce-error-response" style="display:none"></div>
                                            <div class="response" id="mce-success-response" style="display:none"></div>
                                        </div>
                                        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_35e35f65155b9eafc80e315f4_3513ef6b4a" tabindex="-1" value></div>
                                        <div class="clear"><input type="submit" value="Send" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                                    </div>
                                </form>
                            </div>
                            <script type="text/javascript" src="mc-validate.js"></script>
                            <script type="text/javascript">
                                (function($) {
                                    window.fnames = new Array();
                                    window.ftypes = new Array();
                                    fnames[0] = 'EMAIL';
                                    ftypes[0] = 'email';
                                    fnames[1] = 'FNAME';
                                    ftypes[1] = 'text';
                                    fnames[3] = 'ADDRESS';
                                    ftypes[3] = 'address';
                                    fnames[4] = 'PHONE';
                                    ftypes[4] = 'phone';
                                    fnames[2] = 'MMERGE2';
                                    ftypes[2] = 'text';
                                }(jQuery));
                                var $mcj = jQuery.noConflict(true);
                            </script>
                        </div>
                        <div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




</body></html>