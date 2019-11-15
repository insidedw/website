<!DOCTYPE html>


<html>
<head>

    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="shortcut icon" href="/img/favicon.ico"/>

    <link rel="stylesheet" href="http://fonts.googleapis.com/earlyaccess/nanumgothic.css"/>
    <!-- Basic style components -->
    <link rel="stylesheet" href="/jui-ui/dist/ui.min.css"/>
    <link rel="stylesheet" href="/jui-ui/dist/ui-jennifer.min.css"/>

    <!-- Grid style components -->
    <link rel="stylesheet" href="/jui-grid/dist/grid.min.css"/>
    <link rel="stylesheet" href="/jui-grid/dist/grid-jennifer.min.css"/>

    <title>Daewoong Kim</title>
</head>

<!-- Required script files -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="./jui-ui/lib/core.min.js"></script>

<!-- Basic script components -->
<script src="./jui-ui/dist/ui.min.js"></script>

<!-- Grid script components -->
<script src="./jui-grid/dist/grid.min.js"></script>

<!-- Chart script components -->
<script src="./jui-chart/dist/chart.js"></script>

<script src="./bootstrap/bootstrap.js"></script>

</head>
<style>
    .jui .vmenu.flat > * {
        border: 0px solid #e5e5e5 !important
    }

    body {
        font-family: "Noto Sans", "Nanum Gothic", "Dotum", "sans-serif";
        font-size: 14px;
        margin: 0;
        overflow-x: hidden
    }

    .insidedw {
        width: 100px;
        height: 50px;
        margin-top: 15px;
        margin-bottom: 15px
    }
    .logo {
        width: 300px;
        height: 200px;
        margin-top: 15px;
        margin-bottom: 15px
    }
</style>
<body class="jui">
<div class="row">
    <div class="col col-1"></div>
    <div class="col col-1">
        <a href="./index.php">
            <img class="insidedw" src="/img/brand.png" alt="Should've Happened"></a>
        <div class="col col-1"></div>
    </div>
</div>
<div class="row">
    <div class="col col-1"></div>
    <div class="col col-10">
        <div class="navbar">
            <ul class="nav">
                <?php
                $menu = array("index", "education", "career", "project", "IT Skills", "link", "contact");
                $url = $_SERVER['REQUEST_URI'];

                for ($x = 0; $x < sizeof($menu); $x++) {
                    $pos = strpos($url, $menu[$x]);

                    if ($pos === false) {
                        if ($menu[$x] == "index") {
                            echo "<li><a href='./$menu[$x].php'/>info</a></li>";
                        } else {
                            echo "<li><a href='./$menu[$x].php'/>$menu[$x]</a></li>";
                        }
                    } else {
                        if ($menu[$x] == "index") {
                            echo "<li class='active'><a href='./$menu[$x].php'/>info</a></li>";
                        } else {
                            echo "<li class='active'><a href='./$menu[$x].php'/>$menu[$x]</a></li>";
                        }

                    }
                }
                ?>
            </ul>
        </div>
    </div>
    <div class="col col-1"></div>
</div>
<div class="row">
    <div class="col col-1"><h1></h1></div>

    {{BODY}}
    <div class="navbar flat fixed bottom" style="overflow: hidden;">
        <div class="inline right">
            <span>Code licensed under JUI, MIT</span> <span>Logo provided by Jinwoong Kim</span> <span>Copyright © 2016 Daewoong Kim. All rights reserved.</span>
        </div>
    </div>
</div>
</body>
<script>
    var filter = "win16|win32|win64|macintel";

    console.log(navigator.platform);
    console.log(navigator.platform.toLowerCase());
    console.log(filter.indexOf(navigator.platform.toLowerCase()));

    if (navigator.platform) {
        if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
        } else {
        }
    }

</script>
</html>
