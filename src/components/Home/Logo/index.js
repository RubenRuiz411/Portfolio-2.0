import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import LogoR from '../../../assets/images/lines-logo4.png';
import './index.scss';

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      });

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoR}
        alt="JavaScript,  Developer"
      />
      <svg
        width="500"
        viewBox="0 0 375 374.999991"
        height="500"
        version="1.0"
        ref={outlineLogoRef}
      >
        <path
          stroke-linecap="butt"
          transform="matrix(1.390078, 0, 0, 1.390078, -643.058041, -135.692408)"
          fill="none"
          stroke-linejoin="miter"
          d="M 603.483959 233.898821 C 617.062329 231.600165 627.65638 226.398682 635.266112 218.294374 C 642.878655 210.190065 646.683521 200.06249 646.683521 187.906027 C 646.683521 176.626313 640.386102 162.283598 627.794075 144.872261 L 627.794075 144.706465 C 617.936268 151.605244 611.422472 157.683475 608.247067 162.93835 C 605.071662 168.196034 603.483959 176.24414 603.483959 187.08548 Z M 490.144474 326.376175 C 495.621345 320.78971 499.754992 314.823882 502.545415 308.473072 C 505.338647 302.119451 506.735263 295.549454 506.735263 288.760269 L 506.735263 268.555699 L 502.300937 268.555699 C 494.744596 268.555699 488.995146 269.980416 485.052585 272.827041 C 481.110024 275.673665 478.645573 280.0546 477.66204 285.967036 C 474.815416 282.246473 472.705036 278.54839 471.336521 274.881219 C 469.968005 271.211237 469.285153 267.296778 469.285153 263.13784 C 469.285153 253.060846 472.322863 245.231926 478.401095 239.648271 C 484.479326 234.061806 492.991098 231.271384 503.942031 231.271384 L 506.735263 231.271384 L 506.735263 217.473827 C 506.735263 206.084519 510.731216 196.802782 518.725931 189.631424 C 526.720646 182.457256 539.860641 176.463328 558.148727 171.644018 C 554.096573 174.055078 551.275239 177.12089 549.687537 180.844263 C 548.099834 184.567636 547.307388 191.738994 547.307388 202.361146 L 547.307388 263.13784 C 547.307388 278.686085 542.873061 291.387706 534.001597 301.245512 C 525.132943 311.100509 510.512029 319.477397 490.144474 326.376175 Z M 551.412934 299.109842 C 555.903463 295.824843 559.106969 291.634994 561.023452 286.543105 C 562.937126 281.451217 563.895368 273.976369 563.895368 264.121372 L 563.895368 204.659802 C 563.895368 195.571961 564.828318 189.22115 566.6886 185.607371 C 568.551692 181.993591 573.643581 177.12089 581.964266 170.989266 L 628.777607 136.98714 C 628.887201 136.98714 628.996795 136.930938 629.106388 136.821344 C 636.553135 130.908908 644.767037 123.462162 653.745285 114.483914 C 665.901748 121.053912 674.579315 128.225269 679.780797 136.000797 C 684.98228 143.776325 687.581616 153.30254 687.581616 164.582254 C 687.581616 180.240093 682.956203 193.517783 673.702566 204.415324 C 664.448929 215.310055 649.254756 225.356138 628.122856 234.556383 C 639.947728 235.430322 649.339059 238.195453 656.291229 242.851778 C 663.24621 247.505292 669.349732 255.196517 674.607416 265.928262 C 677.015666 270.966759 679.971884 278.138117 683.47607 287.447955 C 690.813223 307.377136 699.518891 317.341726 709.593075 317.341726 C 710.469824 317.341726 711.619152 317.232132 713.04387 317.012945 C 714.465777 316.793758 716.767243 316.355383 719.942648 315.697821 C 712.605495 325.117253 706.364278 333.46604 701.216188 340.746991 C 696.068097 348.030753 692.23794 354.024681 689.717287 358.734397 C 677.563634 356.764522 667.733928 352.302094 660.23379 345.347114 C 652.733651 338.394943 646.846506 328.292659 642.575165 315.04307 C 632.829762 323.144568 624.095992 331.167384 616.376667 339.105897 C 608.657341 347.04441 602.388023 354.463056 597.568713 361.361834 C 589.467215 357.202897 581.253313 354.108984 572.929817 352.082907 C 564.609131 350.05683 555.956854 349.042386 546.978607 349.042386 C 535.698893 349.042386 524.857554 349.947236 514.454589 351.754126 C 504.051625 353.561016 493.704862 356.326148 483.411491 360.049521 C 496.441892 342.090216 510.596331 328.702932 525.871998 319.88767 C 541.147664 311.072408 557.982932 306.666182 576.380611 306.666182 C 586.673982 306.666182 595.761823 307.840801 603.646945 310.195659 C 611.532066 312.550517 618.922611 316.301991 625.821389 321.447272 L 640.93407 309.293619 C 637.429884 283.887567 633.105151 266.094058 627.95706 255.91028 C 622.81178 245.726503 615.803408 240.634614 606.931944 240.634614 C 606.603163 240.634614 606.083295 240.688006 605.372342 240.797599 C 604.658578 240.907193 604.029117 240.960585 603.483959 240.960585 L 603.483959 259.850031 C 603.483959 272.006494 599.760586 280.903248 592.313839 286.543105 C 584.867092 292.182962 571.232521 296.370001 551.412934 299.109842 Z M 482.425148 163.595911 C 487.899209 148.702418 495.674737 136.905647 505.748921 128.199979 C 515.823105 119.49431 526.55485 115.141476 537.944158 115.141476 C 544.404562 115.141476 553.082129 117.274336 563.97967 121.545678 C 574.874401 125.81702 583.113594 127.95269 588.700059 127.95269 C 592.971401 127.95269 597.105048 127.35133 601.101 126.1458 C 605.096953 124.94027 609.615582 122.751208 614.651269 119.575803 C 606.22099 132.16783 596.365993 142.323506 585.08628 150.045642 C 573.806566 157.764968 563.459803 161.626036 554.040371 161.626036 C 549.004684 161.626036 541.392142 159.762944 531.208364 156.039571 C 521.024587 152.316198 513.414855 150.455916 508.376358 150.455916 C 504.436607 150.455916 500.328251 151.523751 496.05691 153.659422 C 491.788378 155.795093 487.241648 159.105383 482.425148 163.595911 Z M 482.425148 163.595911 "
          stroke="white"
          stroke-width="2.312805"
          stroke-opacity="1"
          stroke-miterlimit="4"
        />
        <path
          stroke-linecap="butt"
          transform="matrix(1.390078, 0, 0, 1.390078, -630.677066, -145.424683)"
          fill="none"
          stroke-linejoin="miter"
          d="M 603.482471 233.89731 C 617.060841 231.598654 627.654892 226.397172 635.267434 218.292863 C 642.877166 210.191365 646.682032 200.060979 646.682032 187.907327 C 646.682032 176.627613 640.387424 162.282087 627.792586 144.870751 L 627.792586 144.707765 C 617.93759 151.606544 611.420984 157.681965 608.245579 162.939649 C 605.070174 168.194523 603.482471 176.24544 603.482471 187.083969 Z M 490.145795 326.374665 C 495.619857 320.79101 499.753504 314.822372 502.546736 308.471561 C 505.339969 302.120751 506.733775 295.550753 506.733775 288.761568 L 506.733775 268.556999 L 502.299448 268.556999 C 494.743108 268.556999 488.996467 269.981716 485.053907 272.82834 C 481.111346 275.674965 478.646894 280.0559 477.660552 285.968336 C 474.813927 282.244962 472.706358 278.54969 471.337842 274.879708 C 469.969327 271.212537 469.283664 267.298077 469.283664 263.136329 C 469.283664 253.062145 472.324185 245.233226 478.399606 239.646761 C 484.477838 234.063106 492.99242 231.269873 503.943353 231.269873 L 506.733775 231.269873 L 506.733775 217.472316 C 506.733775 206.083009 510.732538 196.804081 518.724442 189.629914 C 526.719157 182.458556 539.859153 176.461817 558.147239 171.645318 C 554.095084 174.053567 551.276561 177.119379 549.688858 180.842752 C 548.101156 184.566126 547.3059 191.740294 547.3059 202.362446 L 547.3059 263.136329 C 547.3059 278.687385 542.871573 291.389005 534.002919 301.244002 C 525.131455 311.098999 510.51335 319.475886 490.145795 326.374665 Z M 551.414256 299.108331 C 555.901974 295.823332 559.10548 291.636294 561.021964 286.544405 C 562.938447 281.452516 563.896689 273.977669 563.896689 264.122672 L 563.896689 204.661102 C 563.896689 195.57045 564.82683 189.21964 566.689922 185.60586 C 568.550203 181.992081 573.642092 177.119379 581.965588 170.987756 L 628.778929 136.985629 C 628.888523 136.985629 628.998116 136.932237 629.10771 136.822644 C 636.554457 130.910208 644.765549 123.463461 653.746606 114.482404 C 665.900259 121.052401 674.577827 128.226569 679.779309 136.002097 C 684.980791 143.774814 687.582938 153.30384 687.582938 164.580744 C 687.582938 180.241393 682.957524 193.519082 673.703888 204.413813 C 664.450251 215.311355 649.256078 225.357437 628.121367 234.554872 C 639.949049 235.431621 649.33757 238.196753 656.292551 242.850267 C 663.244721 247.503781 669.351054 255.197816 674.605928 265.929562 C 677.014177 270.965249 679.973205 278.139416 683.477392 287.446445 C 690.814545 307.375625 699.520213 317.340215 709.594397 317.340215 C 710.468336 317.340215 711.620474 317.233432 713.042381 317.014245 C 714.467098 316.795057 716.765755 316.356683 719.94116 315.699121 C 712.604007 325.115743 706.36279 333.46734 701.217509 340.748291 C 696.069419 348.029242 692.236452 354.025981 689.718608 358.735697 C 677.562146 356.763012 667.73525 352.300584 660.235111 345.348413 C 652.732163 338.393433 646.847828 328.291148 642.576486 315.041559 C 632.831083 323.145868 624.097314 331.165873 616.377988 339.104387 C 608.655852 347.04571 602.386535 354.464355 597.570035 361.363134 C 589.465726 357.201386 581.254634 354.107474 572.931139 352.081397 C 564.607643 350.055319 555.958176 349.043686 546.977119 349.043686 C 535.700215 349.043686 524.858876 349.945726 514.455911 351.752616 C 504.052946 353.559506 493.703373 356.324637 483.410002 360.048011 C 496.440404 342.088705 510.594843 328.701422 525.870509 319.88897 C 541.146175 311.073708 557.984253 306.664672 576.379123 306.664672 C 586.672494 306.664672 595.763145 307.842101 603.648266 310.196959 C 611.530578 312.551817 618.923933 316.300481 625.822711 321.448571 L 640.932582 309.292109 C 637.428396 283.888867 633.103662 266.092547 627.958382 255.90877 C 622.810291 245.724992 615.801919 240.633104 606.933265 240.633104 C 606.604484 240.633104 606.084617 240.689305 605.370854 240.796089 C 604.6599 240.905683 604.030439 240.961885 603.482471 240.961885 L 603.482471 259.85133 C 603.482471 272.007793 599.759098 280.904548 592.312351 286.544405 C 584.865604 292.181452 571.233842 296.371301 551.414256 299.108331 Z M 482.42366 163.597211 C 487.900531 148.703718 495.676059 136.904137 505.750243 128.198468 C 515.824426 119.4928 526.556172 115.139965 537.942669 115.139965 C 544.405883 115.139965 553.083451 117.275636 563.978182 121.546978 C 574.875723 125.818319 583.114916 127.95118 588.698571 127.95118 C 592.969913 127.95118 597.10356 127.34982 601.102322 126.14429 C 605.098274 124.94157 609.614094 122.749698 614.652591 119.574292 C 606.219502 132.16913 596.364505 142.324806 585.084791 150.044132 C 573.807888 157.766268 563.458315 161.624526 554.041693 161.624526 C 549.003196 161.624526 541.393464 159.764244 531.209686 156.040871 C 521.025909 152.317497 513.416177 150.454406 508.37768 150.454406 C 504.435119 150.454406 500.329573 151.522241 496.058231 153.657912 C 491.78689 155.793582 487.242969 159.106682 482.42366 163.597211 Z M 482.42366 163.597211 "
          stroke="white"
          stroke-width="2.312805"
          stroke-opacity="1"
          stroke-miterlimit="4"
        />
      </svg>
    </div>
  );
};

export default Logo;
