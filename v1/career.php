
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
		<div class="h1">Career</div>
		
		<br>
		<div class="h3">
			Education
		</div>
		<br>
		<div class="h4">
			Minnesota State University, Mankato
		</div>
		<div class="h5">
			Bachelor of Science in Computer Information Technology, 2014 <br>
			Minor degree in Mathematics
		</div>	
		<br>
		<br> 
		<div class="h3">
			Work Experiences
		</div> 
		<br>
		<div class="h4">
			NAVER
		</div>
		<div class="h5">
			Web Developer <small>Sept 2016 - present </small><br>
			Developing VLIVE server and web-based adminitrator tools.
		</div>
		<br>
		<div class="h4">
			KSign
		</div>
		<div class="h5">
			Web Developer <small>June 2014 - Aug 2016 </small><br>
			Developing new features and refactoring for SSO (Single Sign-On), EAM (Extranet Access Control), and License application.
		</div>
		<br>
		<div class="h4">
			Academic Computer Center
		</div>
		<div class="h5">
			Student Consultant <small>Aug 2013 - May 2014 </small><br>
			Helped customers who have trouble with computer hardware or software. <br>
			Created and maintain all campus images and software packages through Microsoft SCCM.
		</div>	
		<br>		
		<div class="h4">
			TEST ENC
		</div>
		<div class="h5">
			Android Application Tester <small> Summer of 2013 </small><br>
			Created test cases depending on SSRS. Run functional, regression, and alpha testing.
		</div>
		<br>
		<div class="h4">
			IT Service Desk
		</div>
		<div class="h5">
			Student Consultant <small>Aug 2012 - May 2013</small><br>
			Provided support for administrative, academic and student computer questions via walk-in, telephone, e-mail.
		</div>
		
		<br>
		<br> 
		<div class="h3">
			Award
		</div> 
		<br>
		<div class="h4">
			The Hickory Tech Scholarship
		</div>
		<div class="h5">
			Minnesota State University, Mankato <small>2013-2014 academic year</small><br>
		</div>
		<br>
		<br>
	</div>
