import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
function SpeechDeveloper() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: "false",
    });
  }, []);

  return (
    <>
      <h1
        className=" lg:text-3xl capitalize lg:font-serif lg:mt-52 lg:text-center
        lg:font-semibold text-rose-700 animate-bounce mt-[25px] p-[5px] text-center text-x md:text-xl "
      >
        {" "}
        welcome to developer speach of motivation catch up for programming!👨‍💻
      </h1>
      <div
        data-aos="fade-up"
        className=" lg:flex lg:justify-between lg:p-14 lg:space-x-[20px] lg:my-5 p-[15px] my-5"
      >
        <div className=" lg:font-serif font-light my-3 md:text-xl">
          <h1>"Code Your Dreams into Reality"</h1>
          <p>
            Hello, VY developers! Every great innovation, every powerful app,
            and every life-changing technology begins with a single line of
            code. As developers, we are the architects of the digital world,
            shaping the future with every keystroke. But let’s be real—coding
            isn’t always easy. There will be bugs that frustrate you, errors
            that make no sense, and days when nothing seems to work. However,
            every challenge you face is an opportunity to learn, to grow, and to
            build something even better. Remember, the most successful
            developers didn’t start as experts. They started just like
            you—curious, passionate, and willing to learn. What sets them apart
            is their persistence. So, when you hit a roadblock, debug it. When
            you feel stuck, ask for help. When you think something is
            impossible, break it down, step by step, and prove yourself wrong.
            Technology evolves, and so must we. Keep learning, keep
            experimenting, and never stop building. Because one day, the code
            you write might change the world. Stay passionate. Stay creative.
            And most importantly—keep coding! 🚀💻🔥
          </p>
        </div>
        <div className="hanuman lg:font-serif lg:my-0 my-14 md:text-xl">
          <h1>"Code ក្តីស្រមៃរបស់អ្នកឱ្យក្លាយជាការពិត"</h1>
          <p>
            សួស្តីអ្នកអភិវឌ្ឍន៍! រាល់ការច្នៃប្រឌិតដ៏អស្ចារ្យ
            រាល់កម្មវិធីដ៏មានអានុភាព និងរាល់បច្ចេកវិជ្ជាផ្លាស់ប្តូរជីវិត
            ចាប់ផ្តើមជាមួយនឹងកូដតែមួយ។ ក្នុងនាមជាអ្នកអភិវឌ្ឍន៍
            យើងគឺជាស្ថាបត្យករនៃពិភពឌីជីថល
            ដោយកំណត់អនាគតជាមួយនឹងរាល់ការចុចគ្រាប់ចុច។ ប៉ុន្តែសូមឱ្យការពិត -
            ការសរសេរកូដមិនតែងតែងាយស្រួលនោះទេ។ វានឹងមានកំហុសដែលធ្វើឱ្យអ្នកខកចិត្ត
            កំហុសដែលគ្មានន័យ និងថ្ងៃដែលគ្មានអ្វីហាក់ដូចជាដំណើរការ។
            ទោះជាយ៉ាងណាក៏ដោយ រាល់បញ្ហាប្រឈមដែលអ្នកជួបប្រទះគឺជាឱកាសមួយដើម្បីរៀន
            រីកចម្រើន និងកសាងអ្វីដែលកាន់តែល្អជាងនេះ។ សូមចាំថា
            អ្នកអភិវឌ្ឍន៍ដែលជោគជ័យបំផុតមិនបានចាប់ផ្តើមជាអ្នកជំនាញនោះទេ។
            ពួកគេបានចាប់ផ្តើមដូចអ្នកដែរចង់ដឹងចង់ឃើញ ងប់ងល់ និងមានឆន្ទៈចង់រៀន។
            អ្វី​ដែល​បំបែក​ពួកគេ​គឺ​ការ​តស៊ូ​របស់​ពួកគេ។
            ដូច្នេះនៅពេលអ្នកបុករបាំងផ្លូវ សូមបំបាត់កំហុសវា។
            នៅពេលអ្នកមានអារម្មណ៍ថាជាប់គាំង សូមសុំជំនួយ។
            នៅពេលដែលអ្នកគិតថាអ្វីមួយមិនអាចទៅរួច ចូរបំបែកវាចុះ មួយជំហានម្តងៗ
            ហើយបង្ហាញថាខ្លួនឯងខុស។ បច្ចេកវិទ្យាមានការវិវឌ្ឍ
            ហើយយើងក៏ត្រូវតែមានដែរ។ បន្តរៀន បន្តការពិសោធន៍ និងមិនឈប់សាងសង់។
            ព្រោះថ្ងៃណាមួយ លេខកូដដែលអ្នកសរសេរអាចផ្លាស់ប្តូរពិភពលោក។
            រក្សា​ចំណង់​ចំណូល​ចិត្ត។ រក្សាភាពច្នៃប្រឌិត។ ហើយសំខាន់បំផុត -
            រក្សាការសរសេរកូដ! 🚀💻🔥
          </p>
        </div>
      </div>
    </>
  );
}

export default SpeechDeveloper;
