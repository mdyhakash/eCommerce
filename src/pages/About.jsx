import Title from "../components/Title"
import Newsletter from "../components/NewsLetter"
import {assets} from "../assets/assets"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"us"}/>
      </div>

      <div className="my-10 flex flex-col gap-16 md:flex-row">
        <img src={assets.about_img} alt="" className="w-full md:max-w-[450px] "/>
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt blanditiis illo ea similique officia odit inventore alias ad quam. Quam dolores dolore debitis ut at eligendi quibusdam quos, necessitatibus deleniti dolor doloribus quisquam molestiae culpa?</p>        
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae distinctio porro ipsam incidunt esse quis expedita quae, excepturi cupiditate corporis. Praesentium nam deleniti ipsa. Perspiciatis, neque. Excepturi iste repellat vitae dicta rerum nam laborum debitis iure dolor reiciendis id, error eum odio molestiae veritatis sapiente.</p>
            <b>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, est dicta consequatur quo magni accusamus dolores dolore labore nihil in, illum animi praesentium veniam suscipit.</p>
        </div>
      </div>

      <div className="text-xl py-4">
      <Title text1={"Why"} text2={"Choose us"}/>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Best Quality Assurance:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque totam officia aperiam maxime eligendi saepe, odio error exercitationem repudiandae quasi, provident eum quae dolorum, corrupti non.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque totam officia aperiam maxime eligendi saepe, odio error exercitationem repudiandae quasi, provident eum quae dolorum, corrupti non.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque totam officia aperiam maxime eligendi saepe, odio error exercitationem repudiandae quasi, provident eum quae dolorum, corrupti non.</p>
        </div>
      </div>


      <Newsletter/>
    </div>
  )
}

export default About