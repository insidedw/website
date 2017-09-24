


<!DOCTYPE html>



<html>
<head>

<meta name="viewport" content="initial-scale=1, maximum-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="shortcut icon" href="http://insidedw.com/img/favicon.ico" />

<link rel="stylesheet" href="http://fonts.googleapis.com/earlyaccess/nanumgothic.css" />
<!-- Basic style components -->
<link rel="stylesheet" href="http://insidedw.com/jui-ui/dist/ui.min.css" />
<link rel="stylesheet" href="http://insidedw.com/jui-ui/dist/ui-jennifer.min.css" />

<!-- Grid style components -->
<link rel="stylesheet" href="http://insidedw.com/jui-grid/dist/grid.min.css" />
<link rel="stylesheet" href="http://insidedw.com/jui-grid/dist/grid-jennifer.min.css" />

<title>Daewoong Kim</title>
</head>

<!-- Required script files -->
<script src="./jui-ui/lib/jquery-1.8.0.min.js"></script>
<script src="./jui-ui/lib/core.min.js"></script>

<!-- Basic script components -->
<script src="./jui-ui/dist/ui.min.js"></script>

<!-- Grid script components -->
<script src="./jui-grid/dist/grid.min.js"></script>

<!-- Chart script components -->
<script src="./jui-chart/dist/chart.js"></script>

</head>
<style>
.jui .vmenu.flat>* {
	border: 0px solid #e5e5e5 !important
}
body{
	font-family:"Noto Sans","Nanum Gothic","Dotum","sans-serif";
	font-size:14px;
	margin:0;
	overflow-x:hidden
}
</style>
<body class="jui">


	<div class="row">
		<div class="col col-12">
			<a href="./index.php"><img src="http://insidedw.com/img/brand.png" alt="Should've Happened"
				style="width: 100px; height: 50px; margin-left: 15px; margin-top: 15px"></a>
		</div>

	</div>
	<div class="row">



		<div class="col col-2">
			<h1></h1>
			<section>
				<table style="">
					<tr>
						<td>
							<div class="vmenu flat">
							<?php 
								$menu = array("index", "career", "project", "link", "contact");
								$url = $_SERVER['REQUEST_URI'];
								
								for ($x = 0; $x < sizeof($menu); $x++) {
									$pos = strpos($url, $menu[$x]);
									
									if ($pos === false) {
										if($menu[$x] == "index") {
											echo "<a href='./$menu[$x].php'/>info</a>";
										} else {
											echo "<a href='./$menu[$x].php'/>$menu[$x]</a>";
										}
									} else {
										if($menu[$x] == "index") {
											echo "<a class='active' href='./$menu[$x].php'/>info</a>";
										} else {
											echo "<a class='active' href='./$menu[$x].php'/>$menu[$x]</a>";
										}
										
									}
								}
								
							?>
							</div>
						</td>
				
				</table>
			</section>
		</div>
		
		{{BODY}}
<div class="navbar flat fixed bottom" style="overflow: hidden;">
			<div class="inline right">
				<span>Code licensed under JUI, MIT</span> <span>Logo provided by Jinwoong Kim</span> <span>Copyright © 2016 Daewoong Kim. All rights reserved.</span>
			</div>
		</div>
	</div>
</body>
</html>
