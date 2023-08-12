
export const slickSettings = {
  centerMode: true,
  dots:true,
  arrows: false,
  centerPadding: '0px',
  slidesToShow: 4,
  infinite: true,
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    }
  ]
  };
  export const slickSettingsCenter = {
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px 0 0px 0",
    slidesToShow: 2,
    speed: 500,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1
        }
      }
      
    ]
    
  }
  export const slickCategory = {
    centerMode: true,
    dots:true,
    arrows: true,
    centerPadding: '0px',
    slidesToShow: 4,
    infinite: true,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
    };
 
 