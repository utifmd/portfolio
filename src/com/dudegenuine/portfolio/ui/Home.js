import React, { Component } from 'react'

import './assets/css/main.css';
import Header from './components/Header'
import IntroContent from './components/IntroContent'
import ItemContent from './components/ItemContent'
import Footer from './components/Footer'

import ic_holy from './images/project/holy/ic_holy.png'
import holy_0 from './images/project/holy/0.png'
import holy_1 from './images/project/holy/1.png'
import holy_2 from './images/project/holy/2.png'
import holy_3 from './images/project/holy/3.png'
import holy_4 from './images/project/holy/4.png'
import holy_5 from './images/project/holy/5.png'
import holy_6 from './images/project/holy/6.png'

import ic_covid from './images/project/covid/ic_covid.png'
import covid_0 from './images/project/covid/0.png'
import covid_1 from './images/project/covid/1.png'
import covid_2 from './images/project/covid/2.png'
import covid_3 from './images/project/covid/3.png'
import covid_4 from './images/project/covid/4.png'
import covid_5 from './images/project/covid/5.png'
import covid_6 from './images/project/covid/6.png'

import ic_babinsa from './images/project/ic_launcher.png'
import babinsa_1 from './images/project/babinsa/1.png'
import babinsa_2 from './images/project/babinsa/2.png'
import babinsa_3 from './images/project/babinsa/3.png'
import babinsa_4 from './images/project/babinsa/4.png'
import babinsa_5 from './images/project/babinsa/5.png'
import babinsa_6 from './images/project/babinsa/6.png'
import babinsa_7 from './images/project/babinsa/7.png'
import babinsa_8 from './images/project/babinsa/8.png'
import babinsa_9 from './images/project/babinsa/9.png'
import babinsa_10 from './images/project/babinsa/10.png'
import babinsa_11 from './images/project/babinsa/11.png'

import img_l_android from './images/academy/l-android.png'
import img_l_aws from './images/academy/l-aws.png'
import img_l_kotlin from './images/academy/l-kotlin.png'
import img_l_java from './images/academy/l-java.png'
import img_l_ml from './images/academy/l-ml.png'
import img_l_ml_mid from './images/academy/l-ml-middle.png'
import img_l_python from './images/academy/l-python.png'
import img_l_solid from './images/academy/l-solid.png'
import img_l_visualdata from './images/academy/l-visualdata.png'

export default class Home extends Component {

	// handleScroll = e => {
	// 	let element = e.target
	// 	if (element.scrollHeight - element.scrollTop === element.clientHeight) {
	// 		console.log('do something at end of scroll')
	// 	}
	// }

	render(){
		return (
			<body className="is-preload">
				<div>
				<Header id="header" next="who_i_am" />
				<ItemContent id="who_i_am" title="Who I Am" desc="I am a self-taught software developer with strong passion to learn new things. I am familiar with a few Java, Kotlin android using android studio & Node JS frameworks as a cross mobile platform, and I also have developed backend API for a production system using native & framework. Currently I am interested and learning about Machine learning development using python. I also enjoy to play music on my spare time." next="stuff_i_do" />
				<IntroContent id="stuff_i_do" title="Stuff I do" desc="Some of the projects we are building include mobile applications, web applications and machine learning which are branches of artificial intelligence, but for now we are focusing on developing android applications." 
					list={[['Kotlin Android', 'code'], ['Java Android', 'coffee'], ['React Native', 'code'], ['Cloud computing', 'cloud']]} next="app_quran" />
				<ItemContent id="app_quran" 
					title="Manual Book" logo={[ic_holy, holy_0, holy_1, holy_2, holy_3, holy_4, holy_5, holy_6]}
					desc="A Holy Quran Android App implements Android library module with Clean Architecture And SOLID principle using MVVM design pattern with Dependency Injection using Dagger, Media player, Databinding, Viewbinding, Navigation Component, Retrofit, Livedata, Coroutine Concurrency, Paging 3, etc." 
					next="app_covid" 
					// next="app_who_kows" 
					/>
				{/* <ItemContent id="app_who_kows" 
					title="Anyone Knows" logo={[ic_launcher, babinsa_1, babinsa_2, babinsa_3, babinsa_4, babinsa_5]}
					desc="A public multi user Java Android Quiz App with Model View Presenter (MVP) Architecture implements Dependency Injection using Dagger HILT, Room database, Mysql database, Alarm manager, Broadcast Receiver, RxJava2, etc." 
					next="app_covid" /> */}
				<ItemContent id="app_covid" 
					title="Covid Update" logo={[ic_covid, covid_0, covid_1, covid_2, covid_3, covid_4, covid_5, covid_6]}
					desc="An Experimental Kotlin Android App with Model View Viewmodel (MVVM) Architecture implements Dependency Injection using Koin, Room database, Databinding, Viewbinding, Navigation Component, Retrofit2, Coroutine etc." 
					next="app_babinsa" />
				<ItemContent id="app_babinsa" 
					title="Babinsa Daily Reports" logo={[ic_babinsa, babinsa_1, babinsa_2, babinsa_3, babinsa_4, babinsa_5, babinsa_6, babinsa_7, babinsa_8, babinsa_9, babinsa_10, babinsa_11]}
					desc="Daily Activity Report of BABINSA TNI-AD Kabupaten Tanah Datar Sumatera Barat using React Native, NodeJs, Firebase, Phone Authentication, Cloud Messaging, GPS etc." 
					next="what_ive_done" 
					// next="app_what_else" 
					/>
				{/* <ItemContent id="app_what_else" 
					title="What else" logo={[ic_launcher]} 
					desc="An experimental TODO Java Android App implements Room Database, MVVM, LiveData, ViewBinding, DataBinding etc." 
					next="what_ive_done" /> */}
				{/* <ItemContent id="app_mbkg_earthquake" 
					title="Daily Earthquake" logo={[ic_launcher]} 
					desc="An experimenatal Java Android App using BMKG (Badan Meteorologi Geofisika) Public Data Api implements Room database, MVVM architecture, LiveData, Retrofit, XML REST API etc." 
					next="what_ive_done" /> */}
				<IntroContent id="what_ive_done" title="What I've Done" desc="In addition to being heavily involved in several software development projects, I also progressively improve additional skills in the technology." 
					list={[['College Student', 'book'], ['Android Develop', 'code'], ['Cloud Practitioner', 'cloud'], ['Machine Learning', 'robot']]}
					next="lesson_college"/>
				<ItemContent id="lesson_college" 
					title="Bachelor of Computer Science" // banner={{m: , 0: }}
					desc="The Information Systems Study Program teaches the foundation of science and the application of Information Technology in an organization. Computing, management and business which are branches of Information Systems." 
					next="lesson_data_visual" />
				<ItemContent id="lesson_data_visual" 
					title="Data Visualization" banner={{m: 0, l: img_l_visualdata}} 
					desc="Learn about technology for a visual representation of results so they can tell and present data effectively."
					next="lesson_python" />
				<ItemContent id="lesson_python" 
					title="Python Programming" banner={{m: 0, l:img_l_python }} 
					desc="Learn the Python language which is the basis for various industry trends such as data science, machine learning, and infrastructure management." 
					next="lesson_java"/>
				<ItemContent id="lesson_java" 
					title="Java Programming" banner={{m: 0, l: img_l_java}} 
					desc="Mempelajari bahasa Java (JVM) mengenai konsep Pemrograman Berorientasi Objek (PBO) terpopuler untuk mengembangkan aplikasi." 
					next="lesson_kotlin" />
				<ItemContent id="lesson_kotlin" 
					title="Kotlin Programming" banner={{m: 0, l: img_l_kotlin}} 
					desc="Learn the Kotlin programming language, functional programming, object-oriented programming (OOP), and concurrency using coroutines." 
					next="lesson_solid" />
				<ItemContent id="lesson_solid" 
					title="SOLID Programming Principles" banner={{m: 0, l: img_l_solid}}  
					desc="Learn the design principles of Single Responsibility, Open Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion which are guidelines for good code design in object-oriented programming (OOP)."
					next="lesson_android" />
				<ItemContent id="lesson_android" 
					title="Android Development" banner={{m: 0, l: img_l_android}}
					desc="Learn and create Android applications using Android Studio by implementing State management, Activity, Intent, View & ViewGroup, Style & Theme to RecyclerView etc."
					next="lesson_ml" />
				<ItemContent id="lesson_ml" 
					title="Machine Learning" banner={{m: 0, l: img_l_ml}}  
					desc="Learn machine learning development materials and steps to create machine learning models in data processing."
					next="lesson_ml_mid" />
				<ItemContent id="lesson_ml_mid" 
					title="Machine Learning Development" banner={{m: 0, l: img_l_ml_mid}}  
					desc="Learn about machine learning implementations in industry, from computer vision, natural language, and machine learning project deployment."
					next="lesson_aws" />
				<ItemContent id="lesson_aws" 
					title="Cloud Practitioner Essentials" banner={{m: 0, l: img_l_aws}}  
					desc="Learn about the Cloud environment using the AWS Cloud, the basic concepts of cloud computing and how to build a good cloud architecture."
					next="footer"
					// next="one_more_thing" 
					/>
				{/* <ItemContent id="one_more_thing" title="One More Thing" desc="Aliquam ante ac id. Adipiscing interdum lorem praesent fusce pellentesque arcu feugiat. Consequat sed ultricies rutrum. Sed adipiscing eu amet interdum lorem blandit vis ac commodo aliquet integer vulputate phasellus lorem ipsum dolor lorem magna consequat sed etiam adipiscing interdum." next="footer" /> */}
				<Footer />
				</div>
			</body>
		);
	}
}