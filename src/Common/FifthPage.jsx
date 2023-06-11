function FifthPage() {
  const obj = [
    {
      url: "https://files.codingninjas.in/coding-event-mobile-27602.jpg",
      one: "Codekaze'23 Round 1 Mock Test",
      two: "Starts on",
      three: "12:30 PM, 25 May 2023",
      url1: [
        "https://lh3.googleusercontent.com/a/AAcHTtfnmB-OOY3Jo7VfIrqdGnSbIuOT2iy04cAnfSI=s96-c",
        "https://lh6.googleusercontent.com/-hrM3z_Gj6cM/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclyY-kQ8dZo4t_mMaqTayUGWUM7RA/s96-c/photo.jpg",
        "https://lh3.googleusercontent.com/a/AAcHTtfDWwyxxCgaTP5N-V1n83cfOYLtLAWQRo7pX6-Nzg=s50",
        "https://files.codingninjas.com/cdn-cgi/image/width=22/gen-assets/MA/6.png",
        "https://lh3.googleusercontent.com/a/AAcHTtcrhysemnqOvVdETI5SkCA1VJFqGpGl91x9QaJD=s50-mo"
      ],
      four: "and 46774 others are participating"
    },
    {
      url: "https://files.codingninjas.in/coding-event-mobile-27234.jpg",
      one: "Codestorm | IIIT Una",
      two: "Starts on",
      three: "02:00 PM, 10 Jun 2023",
      url1: [
        "https://lh6.googleusercontent.com/-JlZug00vFBc/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmO6vKaV8CAs2D2sVCrXGp6ktkERg/s96-c/photo.jpg",
        "https://lh3.googleusercontent.com/a/AAcHTtdkmHzcBPsV2SXFOfgl4rseXVhfueOjrJWw5kDUHA=s50",
        "https://files.codingninjas.in/article_images/profile14758461c05f94835d0203352721dd3c46fd647.webp",
        "https://lh3.googleusercontent.com/a-/AFdZucoCkGtVczzaRLoxJLIeisiA1XttcrC-6lvNxKAfhw=s96-c",
        "https://lh3.googleusercontent.com/a/AATXAJyot3lQaXCxd0rDyOjwEFg8y5TaNjedctN4Hwk0=s50-mo"
      ],
      four: "and 825 others are participating"
    },
    {
      url: "https://files.codingninjas.in/codekaze-5-27236.jpg",
      one: "CodeKaze June'23 - India's Biggest Hiring Challenge",
      two: "Starts on",
      three: "06:00 PM, 10 Jun 2023",
      url1: [
        "https://lh3.googleusercontent.com/a/AEdFTp6Q2I5qim6RJ4Po5R8KgsVEUHwwPHGC54Ofk8yg=s96-c",
        "https://lh3.googleusercontent.com/a/AAcHTtfFnir-vMLnHIQerW_QEzcehM4BBKSJDTnA5QYc=s96-c",
        "https://lh3.googleusercontent.com/a/AAcHTtdAwTrw3rAlXjk4UwgAyC03FbAQZSUF0PzU74zLMQ=s96-c",
        "https://files.codingninjas.in/article_images/profile3162117f1dac7ceb4d26c97ac12d81ccb61e3ec.webp",
        "https://lh3.googleusercontent.com/a/AAcHTtcUstvSf26gahAqLjW62ZT5f7wIsKoj9Gz8u47D=s50"
      ],
      four: "and 121942 others are participating"
    }
  ];
  return (
    <div>
      <h2 className="head-final">UPCOMING EVENTS</h2>
      <a href="https://www.codingninjas.com/events/bitblitz-ieee-wie-muj">
      <div className="fifth-container-flex">
      {obj.map((item, index) => {
        return (
            <div className="box-no-one " key={index}>
               <div>
               <img src={item.url} alt="img" width={300}/>
               </div>
               <div>
                  <div className="flex-fifth-box-one">{item.one}</div>
                  <div className="flex-fifth-box-two">{item.two}</div>
                  <div className="flex-fifth-box-three">{item.three}</div>
               </div>
               <div>
                  <div>
                     <img src={item.url1[0]} width={30} className="img-fifth-box" alt="img"/>
                     <img src={item.url1[1]} width={30} className="img-fifth-box" alt="img"/>
                     <img src={item.url1[2]} width={30} className="img-fifth-box" alt="img"/>
                     <img src={item.url1[3]} width={30} className="img-fifth-box" alt="img"/>
                     <img src={item.url1[4]} width={30} className="img-fifth-box" alt="img"/>
                  </div>
                  <div className="flex-fifth-box-four">{item.four}</div>
               </div>
            </div>
            )
      })}
      </div>
      </a>
    </div>
  );
}
export default FifthPage;
