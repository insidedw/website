<?php

class cs_layout
{
    public static $body;
    public static $ht;

    public function echo_ht($ht_skin = "basic", $restr = '', $str = '{{TITLE}}')
    {
        // 기본적으로 해더는 무조건 출력 한다.
        if ($ht !== 'no') {
            // 버퍼링에 의해 사이트가 늦어지면, $aBody에 직접 변수값을 넣어주면 될 것임
            ob_start(); // 버퍼링 시작
            if (is_file($ht_skin))
                @include($ht_skin);
            else
                @include('./skin.php');

            $this->body = ob_get_contents(); // 버퍼링된 내용을 변수로 받음
            ob_end_clean(); // 버퍼링비움

            if ($str !== '') {
                $this->body = preg_replace($str, $restr, $this->body);
            }
            $this->body = explode('{{BODY}}', $this->body, 2);

            // 해더 출력이라면 바로 해더를 출력한다.
            if ($this->ht == 'h' or $this->ht == 'ht')
                echo $this->body [0];
        }
    }

    function __destruct()
    {
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
    <div class="h1">Education</div>
    <br>
    <div class="row">
        <div class="col col-3">
            <div class="h5">
                <img class="logo" src="/img/mnsu-logo.png" alt="Should've Happened"></a>
            </div>
        </div>
        <div class="col col-7">
            <br><br><br>
            Bachelor of Science in Computer Information Technology, 2014 <br>
            Minor degree in Mathematics <br>
            Cum Laude <br>
            Focus on Software Engineering and Human Computer Interaction
        </div>
    </div>

    <div class="row">
        <div class="col col-3">
            <div class="h5">
                <img class="logo" src="/img/sunrin-logo.gif" alt="Should've Happened"></a>
            </div>
        </div>
        <div class="col col-7">
            <br><br><br>
            Graduated of Internet Information Communication, 2007 <br>
            Studied Basic concepts of Computer Science
        </div>
    </div>

</div>
