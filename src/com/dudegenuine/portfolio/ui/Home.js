import React, { Component } from 'react'

import './assets/css/main.css';
import Header from './components/Header'
import IntroContent from './components/IntroContent'
import ItemContent from './components/ItemContent'
import Footer from './components/Footer'

import ic_launcher from './images/project/ic_launcher.png'
import cover_babinsa from './images/project/babinsa/babinsa.png'
import babinsa_1 from './images/project/babinsa/1.png'
import babinsa_2 from './images/project/babinsa/2.png'
import babinsa_3 from './images/project/babinsa/3.png'
import babinsa_4 from './images/project/babinsa/4.png'
import babinsa_5 from './images/project/babinsa/5.png'

import img_m_android from './images/academy/m-android.png'
import img_m_aws from './images/academy/m-aws.png'
import img_m_kotlin from './images/academy/m-kotlin.png'
import img_m_ml from './images/academy/m-ml.png'
import img_m_python from './images/academy/m-python.png'
import img_m_solid from './images/academy/m-solid.png'
import img_m_visualdata from './images/academy/m-visualdata.png'
import img_l_android from './images/academy/l-android.png'
import img_l_aws from './images/academy/l-aws.png'
import img_l_kotlin from './images/academy/l-kotlin.png'
import img_l_ml from './images/academy/l-ml.png'
import img_l_python from './images/academy/l-python.png'
import img_l_solid from './images/academy/l-solid.png'
import img_l_visualdata from './images/academy/l-visualdata.png'

export default class Home extends Component {
	render(){
		return (
			<body className="is-preload">
				<Header id="header" next="who_i_am" />
				<ItemContent id="who_i_am" title="Who I Am" desc="I am a self-taught software developer with strong passion to learn new things. I am familiar with a few Java, Kotlin & Node JS frameworks, and I have developed API for a production system using native & framework. Currently I am interested and learning about IOS development using Swift. I enjoy playing music on my spare time." next="stuff_i_do" />
				<IntroContent id="stuff_i_do" title="Stuff I do" desc="Beberapa project yang sedang kami bangun ada dalam bentuk mobile application, web application hingga pembelajaran mesin yang merupakan cabang keilmuan dari kecerdasan buatan, namun untuk saat ini kami tefokus pada pengembangan aplikasi android." 
					list={[['Kotlin Android', 'code'], ['Java Android', 'coffee'], ['React Native', 'code'], ['Cloud computing', 'cloud']]} 
					next="app_babinsa"
					// next="app_who_kows"
					/>
				{/* <ItemContent id="app_who_kows" 
					title="Who Knows" logo={[ic_launcher]}
					desc="Aliquam ante ac id. Adipiscing interdum lorem praesent fusce pellentesque arcu feugiat. Consequat sed ultricies rutrum. Sed adipiscing eu amet interdum lorem blandit vis ac commodo aliquet integer vulputate phasellus lorem ipsum dolor lorem magna consequat sed etiam adipiscing interdum." 
					next="app_babinsa" /> */}
				<ItemContent id="app_babinsa" 
					title="Babinsa Daily Report" logo={[ic_launcher, babinsa_1, babinsa_2, babinsa_3, babinsa_4, babinsa_5]}
					desc="Daily Activity Reports of BABINSA TNI-AD Kabupaten Tanah Datar Sumatera Barat using React Native, NodeJs, Firebase, Phone Authentication, Cloud Messaging, GPS etc." 
					// next="app_what_else" 
					next="what_ive_done" 
					/>
				{/* <ItemContent id="app_what_else" 
					title="What else" logo={[ic_launcher]} 
					desc="An experimental TODO Java Android App implements Room Database, MVVM, LiveData, ViewBinding, DataBinding etc." 
					next="app_mbkg_earthquake" />
				<ItemContent id="app_mbkg_earthquake" 
					title="BMKG Earthquake" logo={[ic_launcher]} 
					desc="An experimenatal Java Android App using BMKG (Badan Meteorologi Geofisika) Public Data Api implements Room database, MVVM architecture, LiveData, Retrofit, XML REST API etc." 
					next="what_ive_done" /> */}
				<IntroContent id="what_ive_done" title="What I've Done" desc="Selain banyak terlibat pada beberapa project software development saya juga senantiasa meningkatkan skill tambahan dalam bidang teknologi secara progressif." 
					list={[['College Student', 'book'], ['Android Develop', 'code'], ['Cloud Practitioner', 'cloud'], ['Machine Learning', 'robot']]}
					next="lesson_college"/>
				<ItemContent id="lesson_college" 
					title="Bachelor's Degree" // banner={{m: , l: }}
					desc="Program Studi Sistem Informasi mengajarkan landasan ilmu pengetahuan dan penerapan Teknologi Informasi dalam suatu organisasi. Terkait hal tersebut, beberapa bidang pada kurikulum Program Studi Sistem Informasi adalah komputer, manajemen dan bisnis." 
					next="lesson_data_visual" />
				<ItemContent id="lesson_data_visual" 
					title="Data Visualization" banner={{m: img_m_visualdata, l: img_l_visualdata}} 
					desc="Mempelajari teknik untuk representasi hasil secara visual sehingga dapat menceritakan dan mempresentasikan data secara efektif."
					next="lesson_python" />
				<ItemContent id="lesson_python" 
					title="Python Programming" banner={{m: img_m_python, l:img_l_python }} 
					desc="Mempelajari bahasa Python yang menjadi landasan penting berbagai tren industri seperti ilmu data, pemelajaran mesin, dan manajemen infrastruktur." 
					// next="lesson_java" 
					next="lesson_kotlin" 
					/>
				{/* <ItemContent id="lesson_java" 
					title="Java Programming" // banner={{m: , l: }} 
					desc="Mempelajari bahasa Java (JVM) mengenai konsep Pemrograman Berorientasi Objek (PBO) terpopuler untuk mengembangkan aplikasi." 
					next="lesson_kotlin" /> */}
				<ItemContent id="lesson_kotlin" 
					title="Kotlin Programming" banner={{m: img_m_kotlin, l: img_l_kotlin}} 
					desc="Mempelajari bahasa pemrograman kotlin, functional programming, object-oriented programming (OOP), serta concurrency dengan coroutine." 
					next="lesson_solid" />
				<ItemContent id="lesson_solid" 
					title="SOLID Programming Principles" banner={{m: img_m_solid, l: img_l_solid}}  
					desc="Mempelajari prinsip desain inheritance, encapsulation, polymophism, abstraction, yang merupakan pedoman untuk rancangan kode yang baik pada pemrograman berorientasi objek (OOP)."  
					next="lesson_android" />
				<ItemContent id="lesson_android" 
					title="Android Development" banner={{m: img_m_android, l: img_l_android}}
					desc="Mempelajari dan membuat aplikasi Android menggunakan Android Studio dengan menerapkan Activity, Intent, View & ViewGroup, Style & Theme hingga RecyclerView dll."
					next="lesson_ml" />
				<ItemContent id="lesson_ml" 
					title="Machine Learning" banner={{m: img_m_ml, l: img_l_ml}}  
					desc="Mempelajari materi pengembangan machine learning dan langkah menciptakan model machine learning dalam pemprosesan data."
					next="lesson_aws" />
				<ItemContent id="lesson_aws" 
					title="Cloud Practitioner Essentials" banner={{m: img_m_aws, l: img_l_aws}}  
					desc="Mempelajari materi Cloud dengan menggunakan AWS Cloud, mengenai konsep cloud computing hingga cara membangun arsitektur cloud yang baik."
					next="footer"
					// next="one_more_thing" 
					/>
				{/* <ItemContent id="one_more_thing" title="One More Thing" desc="Aliquam ante ac id. Adipiscing interdum lorem praesent fusce pellentesque arcu feugiat. Consequat sed ultricies rutrum. Sed adipiscing eu amet interdum lorem blandit vis ac commodo aliquet integer vulputate phasellus lorem ipsum dolor lorem magna consequat sed etiam adipiscing interdum." next="footer" /> */}
				<Footer />
			</body>
		);
	}

}