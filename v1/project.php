
<?php
class cs_layout {
	public static $body;
	public static $ht;
	public function echo_ht($ht_skin = "basic", $restr = '', $str = '{{TITLE}}') {
		// 기본적으로 해더는 무조건 출력 한다.
		if ($ht !== 'no') {
			// 버퍼링에 의해 사이트가 늦어지면, $aBody에 직접 변수값을 넣어주면 될 것임
			ob_start (); // 버퍼링 시작
			if (is_file ( $ht_skin ))
				@include ($ht_skin);
			else
				@include ('./skin.php');
			
			$this->body = ob_get_contents (); // 버퍼링된 내용을 변수로 받음
			ob_end_clean (); // 버퍼링비움
			
			if ($str !== '') {
				$this->body = preg_replace ( $str, $restr, $this->body );
			}
			$this->body = explode ( '{{BODY}}', $this->body, 2 );
			
			// 해더 출력이라면 바로 해더를 출력한다.
			if ($this->ht == 'h' or $this->ht == 'ht')
				echo $this->body [0];
		}
	}
	function __destruct() {
		if ($this->ht !== 'no')
			echo $this->body [1];
	}
}
?>

<?php 
$layout = new cs_layout;
$layout->ht = 'ht'; 
$layout->echo_ht("Daewoong Kim");
?>

<div class="col col-9">
	<h1></h1>
	<div class="h1">Project</div>

	<br>
	<div class="h3">
		KSign
	</div>
	<br>
	<div class="h4">
		Single Sign-On <small>Jun 2014 ~ present</small>
	</div>
	<div class="h5">
		Refactored SSO Server<br>
		Developed duplicated login prevention<br>
		Developed sharing third party IDPs with Google<br>
		Maintain SSO Solution (Server and Agent)<br>
	</div>

	<br>
	
	<div class="h4">
		Extranet Access Management <small>Sept 2014 ~ present</small>
	</div>
	<div class="h5">
		Developed ABAC (Attribute Based Access Control)<br> 
		Developed Admin UI <br>
		Maintain EAM Solution (Server and Agent) <br>
	</div>

	<br>

	<div class="h4">
		OAuth 1.0a <small>Apr 2016</small>
	</div>
	<div class="h5">
		Developed a prototype about Service Provider and Consumer<br>
	</div>

	<br>

	<div class="h4">
		Authentication and Authorization Platforms in the IoT <small>Jan 2016 ~ Mar 2016</small>
	</div>
	<div class="h5">
		A resource owner can protect their resource and control protected-resource access by arbitrary clients <br>
		Joined a part of information security <br> 
		Developed a Authorization Service Provider based on UMA<br> 
		Developed Restful API to communicate with a Resource Provider<br>
	</div>

	<br>

	<div class="h4">
		K-ICT IoT OPEN LAB  <small>Aug 2015 ~ Dec 2015</small>
	</div>
	<div class="h5">
		A user is able to access and control different platforms' devices using only one application on smart phone <br>
		Joined a part of information security <br> 
		Developed a Service Provider federating different platforms based on OAuth 2.0<br> 
		Developed UI for a Service Provider <br> 
		Developed API to communicate with a Service Provider <br>
	</div>

	<br>
	
	<div class="h4">
		License Application <small>Apr 2015 ~ Jul 2015</small>
	</div>
	<div class="h5">
		A permit from an authority to use solutions <br>
		Developed web-based License Provider to download license<br> 
		Developed Statistic on License Provider<br> 
		Developed API to read a license to verify authority<br>
	</div>
	<br>
	<br>
</div>
