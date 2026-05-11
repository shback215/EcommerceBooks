import { Link, PrefetchPageLinks } from 'react-router-dom';
import '../css/About.css';

function AboutDogwood() {
  return (
    <div className="about">
      <h2>About When The Dogwood Blooms</h2>
      <div>
        <p className="justify"><i>When the Dogwood Blooms: Seasons in a Boys Life</i> is a seven-chapter memoir. 
          This memoir is based on many experiences in the author's life, though much of this is fictionalized. 
          This life odyssey began with a road trip from San Antonio, Texas, to Porto Alegre, in the Rio Grande do
           Sul state of Brazil, in a 1957 New Yorker station wagon that was large enough for two adults and four
           young children to sleep in on nights when a stay at a city hotel was not on their travel budget, to a
           class reunion on the North Shore of Chicago more than half a century later.</p>
        <p className="justify">The seven chaters in this novel are avaialble on Amazon Books as these seven 
          shorter novels:</p>
        <p className="bullet-item-justify">&bull; <i>Three Stories of The Plague</i>: This book is available on Amazon
        at <a target="_blank" href="https://www.amazon.com/Three-Stories-Plague-Chapter-Chapters-ebook/dp/B0BTY71HZ2">Three Stories of The Plague</a>.  
        This chapter has three sections, each with a different related story. This first story is the story of 
        wizened beggar, bent by leprosy, who approached the stationwagon in which six Texans, including the protagonist
        Ray, passed through her mining town in the Peruvian Andes, shortly after a boy herding llamas spit on Ray's window. 
        In one of her hands she held all she had to sell that day. The second section of this chapter is about two brothers
        in a small city named Donna, near Mexico on the southern tip of Texas, that's called The Valley. One of the brothers
        is a citrus farmer and the other is an MD. The third section of this chapter, set in a mining town 
        in south central Colorado, named Saint Sebastian, is a ghost story about the love of a young man of 21 
        and a same-aged young woman also from a city in the East. The young man was an aspiring artist; and she hoped to 
        become a chef, though she found work in the soon-to-be ghost town as a barmaid.
        </p>
        <p className="bullet-item-justify">&bull; <i>A Year in the Valley</i>: This book is available
        at <a target="_blank" href="https://www.amazon.com/Year-Valley-Chapter-Dogwood-Chapters/dp/B0BW2RY35C">A Year in the Valley</a>.
        This book begins with Ray working in a large home improvement store in North Dallas when he is offered a job in a 
        small city named Donna in the cirtus-dominated southern tip of Texas, known as The Valley. After an all-night drive, Ray arrives 
        in Donna and choses to accept one of two available jobs, as a high school science teacher, rather than  a job at the local junior high
        school as an English teacher, though from his college courses as an undergraduate Premed English major he was qualified for both. This
        chapter follows Ray as he adjusts to his new life in The Valley as the youngest and least experienced teacher at the school,
        though he had done a few dozen days of teaching as a substitute teacher in the Dallas area, in Irving. There were a few real
        cowboy wannabes or rodeo people in the community, both Angloes such as the son of the football coach as well as Mexican Americans, such
        as a Donna businessman who built an arena behind his house for weekend rodeos. Despite his popularity with some of the students and reporting on 
        football games for the newspaper in the largest city in the Valley, McAllen, Ray had a rough go of it, especially with the 
        high school principal who regularly scowled into the window of his classroom, and in spite of the support of the vice principal.</p>
        <p className="bullet-item-justify">&bull; <i>The Big Time Newspaper Man</i>: This book is available
        at <a target="_blank" href="https://www.amazon.com/Big-Time-Newspaper-Man-Chapter-Chapters-ebook/dp/B0BTY9W2SL">The Big Time Newspaper Man</a>.
        This chapter follows Ray to Waco, where he had spent many childhood and teenaged years at his paternal grandparents' house, often attending the morning
        service and Sunday School and Training Union and the evening service on Sunday night, as well as a summer camp and on other outings with teenagers 
        from his grandfather's Southern Baptist church. After the tumultuous breakup of his parents when Ray and his older brother left with with their father
        to Illinois, where Ray and his brother went to a prestigious prep school on the North Shore of Chicago, Ray still had a few friends left in Waco, such
        as the son of the minister at the First Baptist Church, and he returned to Waco to work as a newspaper man when he was offered a job as a cub reporter at
        the newspaper he had had read for many years sitting on the front porch swing at his grandparents' house on Sunday morning when he still had enough time
        to read the comics before the family left for church and the Sunday lunch after the morning service at a restaraunt such as the Elite where they were 
        often waited on by a tuxedoed waiter with a pencil-thin mostache and a wooden hand but could still carry a tray of drinks and food adroitly. Despite
        finally landing a coveted full-time job as a journalist, Ray again found himself in a career rut, writing mundane stories about local events and 
        struggling to find his voice as a writer, with a city editor who was skeptical of the potential of an English major journalist.</p>
        <p className="bullet-item-justify">&bull; <i>Shanties Never Sung</i>: This book is available
        at <a target="_blank" href="https://www.amazon.com/Shanties-Never-Sung-Chapter-Chapters-ebook/dp/B0BTYGB85B">Shanties Never Sung</a>
        </p>
        <p className="bullet-item-justify">&bull; <i>Five Stories on a Summer Night</i>: This book is available
        at <a target="_blank" href="https://www.amazon.com/Five-Stories-Summer-Night-Chapters-ebook/dp/B0BTYJ1YFH">Five Stories on a Summer Nighe</a>
        </p>
        <p className="bullet-item-justify">&bull; <i>AKA Jake Spelled Jaak</i>: This book is available
        at <a target="_blank" href="https://www.amazon.ca/AKA-Jake-Spelled-Jaak-Chapter/dp/B0BW2VKLD4">AKA Jake Spelled Jaak</a>
        </p>
        <p className="bullet-item-justify">&bull; <i>Homecoming for Tex</i>: This book is available
        at <a target="_blank" href="https://www.amazon.com/Homecoming-Tex-Chapter-Dogwood-Chapters-ebook/dp/B0BV21RQRM">Homecoming for Tex</a>
        </p>
      </div>
      <nav>
        <Link to="/">Back to Home</Link>
      </nav>
    </div>
  );
}

export default AboutDogwood;