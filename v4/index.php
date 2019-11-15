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
    <div class="h1">Daewoong Kim</div>
    <br>
    <div class="h5">
        #I love programming. #Java #JYP #Twice #Table Tannis #School of Rock #AC/DC #Matrix #Breaking bad #Guitar
        #Living young, wild & free <br>
    </div>
    <br>
    <div class="col col-6">
        <div id="result"></div>
        <div id="result2"></div>
        <div id="result3"></div>
    </div>
</div>


<script>
    var chart = jui.include("chart.builder");

    chart("#result", {
        padding: {},
        height: 200,
        axis: {
            x: {
                type: "fullblock",
                domain: ["", "Basic", "Intermediate", "Advanced"],
                line: false
            },
            y: {
                type: "range",
                domain: [0, 100],
                step: 4,
                format: function (value) {
                    if (value == 25) {
                        return "SQL";
                    } else if (value == 50) {
                        return "Swift";
                    } else if (value == 75) {
                        return "Javascript";
                    } else if (value == 100) {
                        return "Java";
                    }
                }

            },
            area: {
                x: "3%"
            },
            data: [
                {Java: 100, Javascript: 75, Swift: 50, SQL: 25},
                {Java: 100, Javascript: 75, Swift: 50, SQL: 25},
                {Java: 100, Javascript: null, Swift: null, SQL: null},
                {Java: null, Javascript: null, Swift: null, SQL: null}
            ]
        },
        brush: [{
            type: "line",
            animate: true
        }, {
            type: "scatter",
            hide: false
        }],
        widget: [
            {type: "title", text: "Language Skill", align: "start", dx: -45},
        ],
        style: {
            titleFontSize: "16px",
            titleFontWeight: "bold",
        }
    });


    var chart2 = jui.include("chart.builder");

    chart("#result2", {
        padding: {},
        height: 200,
        axis: {
            x: {
                type: "fullblock",
                domain: ["", "Basic", "Intermediate", "Advanced"],
                line: false
            },
            y: {
                type: "range",
                domain: [0, 50],
                step: 2,
                format: function (value) {
                    if (value == 25) {
                        return "CSS";
                    } else if (value == 50) {
                        return "HTML";
                    }
                }

            },
            area: {
                x: "3%"
            },
            data: [
                {CSS: 25, HTML: 50},
                {CSS: 25, HTML: 50},
                {CSS: null, HTML: 50},
                {CSS: null, HTML: null}
            ]
        },
        brush: [{
            type: "line",
            animate: true
        }, {
            type: "scatter",
            hide: false
        }],
        widget: [
            {type: "title", text: "Markup Language Skill", align: "start", dx: -45},
        ],
        style: {
            titleFontSize: "16px",
            titleFontWeight: "bold",
        }
    });


    var chart3 = jui.include("chart.builder");

    chart("#result3", {
        padding: {},
        height: 200,
        axis: {
            x: {
                type: "fullblock",
                domain: ["", "Basic", "Intermediate", "Advanced"],
                line: false
            },
            y: {
                type: "range",
                domain: [0, 75],
                step: 3,
                format: function (value) {
                    if (value == 25) {
                        return "Mybatis";
                    } else if (value == 50) {
                        return "jUnit";
                    } else if (value == 75) {
                        return "Spring";
                    }
                }

            },
            area: {
                x: "3%"
            },
            data: [
                {Mybatis: 25, jUnit: 50, Spring: 75},
                {Mybatis: 25, jUnit: 50, Spring: 75},
                {Mybatis: 25, jUnit: 50, Spring: 75},
                {Mybatis: null, jUnit: null, Spring: null}
            ]
        },
        brush: [{
            type: "line",
            animate: true
        }, {
            type: "scatter",
            hide: false
        }],
        widget: [
            {type: "title", text: "Framework Skill", align: "start", dx: -45},
        ],
        style: {
            titleFontSize: "16px",
            titleFontWeight: "bold",
        }
    });
</script>