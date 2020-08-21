import React from 'react';
import { Layout, Descriptions, Table } from 'antd';
import { ThemeContext } from "../../GlobalEnvironment/contextInit";
import NavBar from "../../Components/Nav-Menu/Nav-Menu";
import MyFooter from "../../Components/Footer/Footer";
import {
    useHistory
} from "react-router-dom";
import "./Territories.css"




const { Content } = Layout;

const dataSource = [
    {
        key: '1',
        width: "100px",
        actual: '',
        previous: "219.00",
        highest: '212.22',
        lowest: "219.00",
        dates: "44.99",
        unit: "1960 - 2019",
        frequency: "Million",
        empty: "Yearly"
    }
];
const dataSource2 = [
    {
        pakistanLabour: "Unemployment Rate",
        last: 5.70,
        previous: 5.80,
        highest: 7.80,
        lowest: 3.10,
        unit: "Percent",
        empty: "[±]",
    },
    {
        pakistanLabour: "Employed Persons",
        last: 61710.00,
        previous: 62230.00,
        highest: 62230.00,
        lowest: 5580.00,
        unit: "Thousand",
        empty: "[±]",
    },
    {
        pakistanLabour: "Population",
        last: 219.00,
        previous: 212.22,
        highest: 219.00,
        lowest: 44.99,
        unit: "Million",
        empty: "[±]",
    },
    {
        pakistanLabour: "Living Wage Family",
        last: 29700.00,
        previous: 29500.00,
        highest: 29700.00,
        lowest: 26000.00,
        unit: "PKR/Month",
        empty: "[±]",
    },
    {
        pakistanLabour: "Living Wage Individual",
        last: 13500.00,
        previous: 13400.00,
        highest: 13500.00,
        lowest: 11200.00,
        unit: "PKR/Month",
        empty: "[±]",
    },
    {
        pakistanLabour: "Wages High Skilled",
        last: 51400.00,
        previous: 49200.00,
        highest: 51400.00,
        lowest: 41000.00,
        unit: "PKR/Month",
        empty: "[±]",
    },
    {
        pakistanLabour: "Wages Low Skilled",
        last: 28700.00,
        previous: 21700.00,
        highest: 28700.00,
        lowest: 21700.00,
        unit: "PKR/Month",
        empty: "[±]",
    },
]
const dataSource3 = [
    {
        sno: 1,
        actionsRequired: "Restructuring of public facilities",
        punjab: "Present",
        sindh: "Absent",
        khyberPakhtunkhwa: "Present",
        baluchistan: "Absent"
    },
    {
        sno: 2,
        actionsRequired: "Expanded focus on primary healthcare",
        punjab: "Present",
        sindh: "Present",
        khyberPakhtunkhwa: "Present",
        baluchistan: "Absent"
    },
    {
        sno: 3,
        actionsRequired: "Integration of devolved national public health programmes ",
        punjab: "Present",
        sindh: "Present",
        khyberPakhtunkhwa: "Present",
        baluchistan: "Absent"
    },
    {
        sno: 4,
        actionsRequired: "Bridging of the population health gap ",
        punjab: "Present",
        sindh: "Absent",
        khyberPakhtunkhwa: "Present",
        baluchistan: "Absent"
    },
    {
        sno: 5,
        actionsRequired: "Reformed hospitals through decentralization",
        punjab: "Absent",
        sindh: "Absent",
        khyberPakhtunkhwa: "Absent",
        baluchistan: "Absent"
    },
    {
        sno: 6,
        actionsRequired: "Role of private providers in delivering publicly funded services",
        punjab: "Present",
        sindh: "Present",
        khyberPakhtunkhwa: "Present",
        baluchistan: "Absent"
    },
]
const columns = [
    {
        title: 'Actual',
        dataIndex: 'actual',
        key: 'actual',
        width: "100px",
    },
    {
        title: 'Previous',
        dataIndex: 'previous',
        key: 'previous',
        width: "100px",
    },
    {
        title: 'Highest',
        dataIndex: 'highest',
        key: 'highest',
        width: "100px",
    },
    {
        title: 'Lowest',
        dataIndex: 'lowest',
        key: 'lowest',
        width: "100px",
    },
    {
        title: 'Dates',
        dataIndex: 'dates',
        key: 'dates',
        width: "100px",
    },
    {
        title: 'Unit',
        dataIndex: 'unit',
        key: 'unit',
        width: "100px",
    },
    {
        title: 'Frequency',
        dataIndex: 'frequency',
        key: 'frequency',
        width: "100px",
    },
    {
        title: '',
        dataIndex: 'empty',
        key: 'empty',
        width: "100px",
    },
];
const columns2 = [
    {
        title: "Pakistan Labour",
        dataIndex: "pakistanLabour",
        key: "pakistanLabour",
        width: "100px",
        fixed: "left"
    },
    {
        title: "Last",
        dataIndex: "last",
        key: "last",
        width: "100px",
    },
    {
        title: "Previous",
        dataIndex: "previous",
        key: "previous",
        width: "100px",
    },
    {
        title: "Highest",
        dataIndex: "highest",
        key: "highest",
        width: "100px",
    },
    {
        title: "Lowest",
        dataIndex: "lowest",
        key: "lowest",
        width: "100px",
    },
    {
        title: "Unit",
        dataIndex: "unit",
        key: "unit",
        width: "100px",
    },
    {
        title: '',
        dataIndex: 'empty',
        key: 'empty',
        width: "100px",
    }
]
const columns3 = [
    {
        title: "S.No ",
        dataIndex: "sno",
        key: "sno",
        width: "20px",
        fixed: "left"
    },
    {
        title: "Actions Required",
        dataIndex: "actionsRequired",
        key: "actionsRequired",
        width: "100px",
    },
    {
        title: "Punjab",
        dataIndex: "punjab",
        key: "punjab",
        width: "50px",
    },
    {
        title: "Sindh",
        dataIndex: "sindh",
        key: "sindh",
        width: "50px",
    },
    {
        title: "Khyber Pakhtunkhwa",
        dataIndex: "khyberPakhtunkhwa",
        key: "khyberPakhtunkhwa",
        width: "50px",
    },
    {
        title: "Baluchistan",
        dataIndex: "baluchistan",
        key: "baluchistan",
        width: "50px",
    },
]




const Territories = (props) => {
    let history = useHistory()
    return (
        <>
            <ThemeContext.Consumer>
                {colorsState => <>
                    <Layout>
                        <style>
                            {
                                `
                                .ant-menu{
                                    color:${colorsState.colors.color2} !important
                                }
                                .first-page-card-class:hover{
                                    transition: all .5s ease;
                                    background-color:${colorsState.colors.color1};
                                    color:${colorsState.colors.color2} !important;
                                }
                                `
                            }
                        </style>
                        <NavBar />
                        <Content className="content-container-class">
                            <div className="spacing-class" />
                            <div className="terr-section-parent">
                                <section className="equal-columns-grid">
                                    <div>
                                        <a href="#pakistan" id="link-class">
                                            <img className="anime-class-img" src={"https://res.cloudinary.com/tanzeelah/image/upload/v1596538801/Territories/Pakistan_Maps_oklowt.png"} alt={"https://res.cloudinary.com/tanzeelah/image/upload/v1596538801/Territories/Pakistan_Maps_oklowt.png"} />
                                        </a>
                                    </div>
                                    <div className="content-content-1">
                                        <div className="spacing-class" />
                                        <p className="content-super">About</p>
                                        <h2 className="content-head">PAKISTAN </h2>
                                        <p className="content-para"> Pakistan, populous and multiethnic country of South Asia. Having a predominately Indo-Iranian speaking population, Pakistan has historically and culturally been associated with its neighbours Iran, Afghanistan, and India. Since Pakistan and India achieved independence in 1947, Pakistan has been distinguished from its larger southeastern neighbour by its overwhelmingly Muslim population (as opposed to the predominance of Hindus in India). Pakistan has struggled throughout its existence to attain political stability and sustained social development. Its capital is Islamabad, in the foothills of the Himalayas in the northern part of the country, and its largest city is Karachi, in the south on the coast of the Arabian Sea.</p>
                                    </div>
                                </section>
                                <section className="equal-columns-grid">
                                    <div className="content-content-1">
                                        <div className="spacing-class" />
                                        <p className="content-super">About</p>
                                        <h2 className="content-head">SINDH</h2>
                                        <p className="content-para"> Sindh, also spelled Sind, province of southeastern Pakistan. It is bordered by the provinces of Balochistān on the west and north, Punjab on the northeast, the Indian states of Rajasthan and Gujarat to the east, and the Arabian Sea to the south. Sindh is essentially part of the Indus River delta and has derived its name from that river, which is known in Pakistan as the Sindhu. The province of Sindh was established in 1970. The provincial capital, Karāchi, is situated on the southwestern coast. Area 54,407 square miles (140,914 square km). Pop. (2006 est.) 35,864,000.</p>
                                    </div>
                                    <div>
                                        <a href="#sindh" id="link-class">
                                            <img className="anime-class-img" src={"https://res.cloudinary.com/tanzeelah/image/upload/v1596538802/Territories/Sindh_tj4hij.png"} alt={"https://res.cloudinary.com/tanzeelah/image/upload/v1596538802/Territories/Sindh_tj4hij.png"} />
                                        </a>
                                    </div>
                                </section>
                                <section className="equal-columns-grid">
                                    <div>
                                        <a href="#punjab" id="link-class">
                                            <img className="anime-class-img" src={"https://res.cloudinary.com/tanzeelah/image/upload/v1596538801/Territories/Punjab_uhrvc5.png"} alt={"https://res.cloudinary.com/tanzeelah/image/upload/v1596538801/Territories/Punjab_uhrvc5.png"} />
                                        </a>
                                    </div>
                                    <div className="content-content-1">
                                        <div className="spacing-class" />
                                        <p className="content-super">About</p>
                                        <h2 className="content-head">PUNJAB</h2>
                                        <p className="content-para">Punjab, province of eastern Pakistan. It is bordered by the Indian state of Jammu and Kashmir to the northeast, the Indian states of Punjab and Rajasthan to the east, Sindh province to the south, Balochistān and Khyber Pakhtunkhwa provinces to the west, and Islamabad federal capital area and Azad Kashmir to the north. The provincial capital, Lahore, is located in the east-central region, near the border with India. The name Punjab means “five waters,” or “five rivers,” and signifies the land drained by the Jhelum, Chenab, Ravi, Beas, and Sutlej rivers, which are tributaries of the Indus River. Punjab is Pakistan’s second largest province, after Balochistān, and the most densely populated. Area 79,284 square miles (205,345 square km). Pop. (2011 est.) 91,379,615.</p>
                                    </div>
                                </section>
                                <section className="equal-columns-grid">
                                    <div className="content-content-1">
                                        <div className="spacing-class" />
                                        <p className="content-super">About</p>
                                        <h2 className="content-head">BALOCHISTAN</h2>
                                        <p className="content-para"> Balochistan, also spelled Balūchistān, westernmost province of Pakistan. It is bordered by Iran (west), by Afghanistan (northwest), by Khyber Pakhtunkhwa and Punjab provinces (northeast and east), by Sindh province (southeast), and by the Arabian Sea (south).</p>
                                    </div>
                                    <div>
                                        <a href="#balochistan" id="link-class">
                                            <img className="anime-class-img" src={"https://res.cloudinary.com/tanzeelah/image/upload/v1596538801/Territories/Balochistan_rysd9s.png"} alt={"https://res.cloudinary.com/tanzeelah/image/upload/v1596538801/Territories/Balochistan_rysd9s.png"} />
                                        </a>
                                    </div>
                                </section>
                                <section className="equal-columns-grid">
                                    <div>
                                        <a href="#kpk" id="link-class">
                                            <img className="anime-class-img" src={"https://res.cloudinary.com/tanzeelah/image/upload/v1596538801/Territories/Khyber_Pakhtunkwa_y0xn03.png"} alt={"https://res.cloudinary.com/tanzeelah/image/upload/v1596538801/Territories/Khyber_Pakhtunkwa_y0xn03.png"} />
                                        </a>
                                    </div>
                                    <div className="content-content-1">
                                        <div className="spacing-class" />
                                        <p className="content-super">About</p>
                                        <h2 className="content-head">KPK</h2>
                                        <p className="content-para">Khyber Pakhtunkhwa, formerly North-West Frontier Province, northernmost province of Pakistan. It is bounded by Afghanistan to the west and north, Azad Kashmir and the Northern Areas (the Pakistani-administered areas of the Kashmir region) to the east and northeast, Punjab province to the southeast, and Balochistān province to the southwest. On the western boundary of Khyber Pakhtunkhwa, along the Afghan border, are the federally administered tribal areas, a series of semiautonomous areas that are ethnically homogeneous with the province but not politically connected to it. Peshawar is the provincial capital. Area province, 28,773 square miles (74,521 square km); federally administered tribal areas, 10,509 square miles (27,220 square km). Pop. (2006 est.) province, 21,392,000; federally administered tribal areas, 3,621,000.</p>
                                    </div>
                                </section>
                                <section className="equal-columns-grid">
                                    <div className="content-content-1">
                                        <div className="spacing-class" />
                                        <p className="content-super">About</p>
                                        <h2 className="content-head">GILGIT BALTISTAN</h2>
                                        <p className="content-para"> Gilgit, town in Gilgit-Baltistan, part of the Pakistani-administered sector of the Kashmir region, in the northern Indian subcontinent. It is situated in the Karakoram Range in a narrow valley on the Gilgit River at its confluence with the Hunza River and about 20 miles (32 km) upstream from its confluence with the Indus River. The town was once a Buddhist centre; now, as in earlier days, it serves as a frontier station for local tribal areas. Its economy is mainly agricultural, with wheat, corn (maize), and barley as the main crops. Tourism, notably trekking and mountaineering in the Karakorams, is growing in importance. The main route from Gilgit through the mountains to Mansehra in Khyber Pakhtunkhwa province is the Karakoram Highway (completed in 1978); the town has a small airport. Gilgit is the only town of any size in the region. Pop. (1998 prelim.) 8,200.</p>
                                    </div>
                                    <div>
                                        <a href="#gilgit" id="link-class">
                                            <img className="anime-class-img" src={"https://res.cloudinary.com/tanzeelah/image/upload/v1596538801/Territories/Gilgit_Balistan_e326mw.png"} alt={"https://res.cloudinary.com/tanzeelah/image/upload/v1596538801/Territories/Gilgit_Balistan_e326mw.png"} />
                                        </a>
                                    </div>
                                </section>
                                <section className="equal-columns-grid">
                                    <div>
                                        <a href="#kashmir" id="link-class">
                                            <img className="anime-class-img" src={"https://res.cloudinary.com/tanzeelah/image/upload/v1596538801/Territories/Azad_Kashmir_s3orvd.png"} alt={"https://res.cloudinary.com/tanzeelah/image/upload/v1596538801/Territories/Azad_Kashmir_s3orvd.png"} />
                                        </a>
                                    </div>
                                    <div className="content-content-1">
                                        <div className="spacing-class" />
                                        <p className="content-super">About</p>
                                        <h2 className="content-head">AZAD KASHMIR</h2>
                                        <p className="content-para">Azad Kashmir, area of the Pakistani-administered sector of the Kashmir region, in the northwestern part of the Indian subcontinent. Azad (“Free”) Kashmir, established in 1947 after the partition of India, is neither a province nor an agency of Pakistan but has a government of its own that is regarded by Pakistan as “independent,” even though it is protected by and economically and administratively linked to Pakistan. It has an area of approximately 650 square miles (1,680 square km) and consists of an arc of territory bordering the Indian state of Jammu and Kashmir to the east, the Pakistani provinces of Punjab to the south and southwest and Khyber Pakhtunkhwa to the west, and the Gilgit and Baltistan regions of Pakistani-administered Kashmir (part of what are called the Northern Areas) to the north.</p>
                                    </div>
                                </section>
                                <section id="pakistan">
                                    <h2 className="pakistanPageHeading">Pakistan Overview</h2>
                                    <p className="pageParagraphClass">The total population in Pakistan was estimated at 219.0 million people in 2019, according to the latest census figures and projections from Trading Economics.</p>
                                    <img className="pakistanPageImgClass" src={require("../../Assets/Chart1.png")}></img>
                                    <Table dataSource={dataSource}
                                        size="middle"
                                        className="pakistanTableClass"
                                        scroll={{ x: "20%", y: 100 }}
                                        columns={columns} />
                                    <Table dataSource={dataSource2}
                                        className="pakistanTableClass"
                                        scroll={{ x: "20%", y: 440 }}
                                        columns={columns2} />
                                    <p className="pakistanBoldPara">The population of Pakistan represents 2.56 percent of the world´s total population which arguably means that one person in every 39 people on the planet is a resident of Pakistan.</p>
                                    <Descriptions bordered>
                                        <Descriptions.Item label="Population" span={3}>
                                            207,862,518 (July 2017 est.) (July 2018 est.)
                                            <br />
                                            <strong>Note</strong>: provisional results of Pakistan's 2017 national census estimate the country's total population to be 207,774,000
                                                </Descriptions.Item>
                                        <Descriptions.Item label="Age structure " span={3}>
                                            0-14 years: 30.76% (male 32,828,078 /female 31,118,626)
                                            <br />
                                            15-24 years: 20.94% (male 22,446,320 /female 21,076,265)
                                            <br />
                                            25-54 years: 38.04% (male 41,021,803 /female 38,039,766)
                                            <br />
                                            55-64 years: 5.7% (male 5,979,712 /female 5,871,574)
                                            <br />
                                            65 years and over: 4.56% (male 4,399,926 /female 5,080,448) (2018 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Dependency ratios" span={3}>
                                            total dependency ratio: 65.3 (2015 est.)
                                            <br />
                                            youth dependency ratio: 57.9 (2015 est.)
                                            <br />
                                            elderly dependency ratio: 7.4 (2015 est.)
                                            <br />
                                            potential support ratio: 13.5 (2015 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Median age" span={3}>
                                            total: 24.1 years (2018 est.)
                                            <br />
                                            male: 24.1 years
                                            <br />
                                            female: 24.2 years
                                            <br />
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Population growth rate" span={3}>
                                            1.41% (2018 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Birth rate" span={3}>
                                            21.6 births/1,000 population (2018 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Death rate" span={3}>
                                            6.3 deaths/1,000 population (2018 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Net migration rate" span={3}>
                                            -1.2 migrant(s)/1,000 population (2018 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Urbanization" span={3}>
                                            urban population: 36.9% of total population (2019)
                                            <br />
                                            rate of urbanization: 2.53% annual rate of change (2015-20 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Major cities - population " span={3}>
                                            15.741 million Karachi, 12.188 million Lahore, 3.385 million Faisalabad, 2.196 million Rawalpindi, 2.169 million Gujranwala, 1.095 million ISLAMABAD (capital) (2019)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Sex ratio" span={3}>
                                            at birth: 1.05 male(s)/female
                                            <br />
                                            0-14 years: 1.05 male(s)/female
                                            <br />
                                            15-24 years: 1.07 male(s)/female
                                            <br />
                                            25-54 years: 1.08 male(s)/female
                                            <br />
                                            55-64 years: 1.02 male(s)/female
                                            <br />
                                            65 years and over: 0.87 male(s)/female
                                            <br />
                                            total population: 1.05 male(s)/female (2018 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Mother's mean age at first birth" span={3}>
                                            23.6 years (2017/18 est.)
                                            <br />
                                            <strong>Note</strong>: median age at first birth among women 25-29
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Infant mortality rate " span={3}>
                                            total: 50.4 deaths/1,000 live births (2018 est.)
                                            <br />
                                            male: 53.5 deaths/1,000 live births
                                            <br />
                                            female: 47.1 deaths/1,000 live births
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Infant mortality rate " span={3}>
                                            total population: 68.4 years (2018 est.)
                                            <br />
                                            male: 66.4 years
                                            <br />
                                            female: 70.5 years
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Life expectancy at birth " span={3}>
                                            total population: 68.4 years (2018 est.)
                                            <br />
                                            male: 66.4 years
                                            <br />
                                            female: 70.5 years
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Total fertility rate " span={3}>
                                            2.55 children born/woman (2018 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Contraceptive prevalence rate" span={3}>
                                            34.2% (2017/18)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="HIV/AIDS - adult prevalence rate" span={3}>
                                            0.1% (2018 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="HIV/AIDS - people living with HIV/AIDS " span={3}>
                                            160,000 (2018 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="HIV/AIDS - deaths " span={3}>
                                            6,400 (2018 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Drinking water source" span={3}>
                                            improved: urban: 93.9% of population
                                            <br />
                                            rural: 89.9% of population
                                            <br />
                                            total: 91.4% of population
                                            <br />
                                            unimproved: urban: 6.1% of population
                                            <br />
                                            rural: 10.1% of population
                                            <br />
                                            total: 8.6% of population (2015 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Sanitation facility access" span={3}>
                                            improved: urban: 83.1% of population (2015 est.)
                                            <br />
                                            rural: 51.1% of population (2015 est.)
                                            <br />
                                            total: 63.5% of population (2015 est.)
                                            <br />
                                            unimproved: urban: 16.9% of population (2015 est.)
                                            <br />
                                            rural: 48.9% of population (2015 est.)
                                            <br />
                                            total: 36.5% of population (2015 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Major infectious diseases " span={3}>
                                            degree of risk: high (2016)
                                            <br />
                                            food or waterborne diseases: bacterial diarrhea, hepatitis A and E, and typhoid fever (2016)
                                            <br />
                                            vector borne diseases: dengue fever and malaria (2016)
                                            <br />
                                            animal contact diseases: rabies (2016)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Nationality " span={3}>
                                            noun: Pakistani(s)
                                            <br />
                                            adjective: Pakistani
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Ethnic groups" span={3}>
                                            Punjabi 44.7%,
                                            <br />
                                            Pashtun (Pathan) 15.4%,
                                            <br />
                                            Sindhi 14.1%,
                                            <br />
                                            Saraiki 8.4%,
                                            <br />
                                            Muhajirs 7.6%,
                                            <br />
                                            Balochi 3.6%,
                                            <br />
                                            Other 6.3%
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Religions" span={3}>
                                            Muslim (official) 96.4% (Sunni 85-90%, Shia 10-15%),
                                            <br />
                                            other (includes Christian and Hindu) 3.6% (2010 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Languages " span={3}>
                                            Punjabi 48%,
                                            <br />
                                            Sindhi 12%,
                                            <br />
                                            Saraiki (a Punjabi variant) 10%,
                                            <br />
                                            Pashto (alternate name, Pashtu) 8%,
                                            <br />
                                            Urdu (official) 8%,
                                            <br />
                                            Balochi 3%,
                                            <br />
                                            Hindko 2%,
                                            <br />
                                            Brahui 1%,
                                            <br />
                                            English (official; lingua franca of Pakistani elite and most government ministries),
                                            <br />
                                            Burushaski,
                                            <br />
                                            and other 8%
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Literacy" span={3}>
                                            definition: age 15 and over can read and write
                                            <br />
                                            total population: 57.9%
                                            <br />
                                            male: 69.5%
                                            <br />
                                            female: 45.8% (2015 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="School life expectancy (primary to tertiary education)" span={3}>
                                            total: 8 years
                                            <br />
                                            male: 9 years
                                            <br />
                                            female: 8 years (2017)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Education expenditures" span={3}>
                                            2.8% of GDP (2017)
                                       </Descriptions.Item>
                                        <Descriptions.Item label="Maternal mortality rate " span={3}>
                                            140 deaths/100,000 live births (2017 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Children under the age of 5 years underweight " span={3}>
                                            23.1% (2018)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Health expenditures " span={3}>
                                            2.7% (2015)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Physicians density " span={3}>
                                            0.98 physicians/1,000 population (2015)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Hospital bed density " span={3}>
                                            0.6 beds/1,000 population (2014)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Obesity - adult prevalence rate " span={3}>
                                            Obesity - adult prevalence rate
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Population " span={3}>
                                            207,862,518 (July 2017 est.) (July 2018 est.)
                                            <br />
                                            <strong>Note</strong>: provisional results of Pakistan's 2017 national census estimate the country's total population to be 207,774,000
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Age structure " span={3}>
                                            0-14 years: 30.76% (male 32,828,078 /female 31,118,626)
                                            <br />
                                            15-24 years: 20.94% (male 22,446,320 /female 21,076,265)
                                            <br />
                                            25-54 years: 38.04% (male 41,021,803 /female 38,039,766)
                                            <br />
                                            55-64 years: 5.7% (male 5,979,712 /female 5,871,574)
                                            <br />
                                            65 years and over: 4.56% (male 4,399,926 /female 5,080,448) (2018 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Dependency ratios " span={3}>
                                            total dependency ratio: 65.3 (2015 est.)
                                            <br />
                                            youth dependency ratio: 57.9 (2015 est.)
                                            <br />
                                            elderly dependency ratio: 7.4 (2015 est.)
                                            <br />
                                            potential support ratio: 13.5 (2015 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Median age" span={3}>
                                            total: 24.1 years (2018 est.)
                                            <br />
                                            male: 24.1 years
                                            <br />
                                            female: 24.2 years
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Population growth rate" span={3}>
                                            1.41% (2018 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Birth rate " span={3}>
                                            21.6 births/1,000 population (2018 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Death rate " span={3}>
                                            6.3 deaths/1,000 population (2018 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Net migration rate " span={3}>
                                            -1.2 migrant(s)/1,000 population (2018 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Urbanization " span={3}>
                                            urban population: 36.9% of total population (2019)
                                            <br />
                                            rate of urbanization: 2.53% annual rate of change (2015-20 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Major cities - population" span={3}>
                                            15.741 million Karachi,
                                            <br />
                                            12.188 million Lahore,
                                            <br />
                                            3.385 million Faisalabad,
                                            <br />
                                            2.196 million Rawalpindi,
                                            <br />
                                            2.169 million Gujranwala,
                                           <br />
                                            1.095 million ISLAMABAD (capital) (2019)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Sex ratio " span={3}>
                                            at birth: 1.05 male(s)/female
                                            <br />
                                            0-14 years: 1.05 male(s)/female
                                            <br />
                                            15-24 years: 1.07 male(s)/female
                                            <br />
                                            25-54 years: 1.08 male(s)/female
                                            <br />
                                            55-64 years: 1.02 male(s)/female
                                            <br />
                                            65 years and over: 0.87 male(s)/female
                                            <br />
                                            total population: 1.05 male(s)/female (2018 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Mother's mean age at first birth " span={3}>
                                            23.6 years (2017/18 est.)
                                             <br />
                                            <strong>Note</strong>: median age at first birth among women   25-29
                                         </Descriptions.Item>
                                        <Descriptions.Item label="Infant mortality rate " span={3}>
                                            total: 50.4 deaths/1,000 live births (2018 est.)
                                            <br />
                                            male: 53.5 deaths/1,000 live births
                                            <br />
                                            female: 47.1 deaths/1,000 live births
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Life expectancy at birth " span={3}>
                                            total population: 68.4 years (2018 est.)
                                            <br />
                                            male: 66.4 years
                                            <br />
                                            female: 70.5 years
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Total fertility rate " span={3}>
                                            2.55 children born/woman (2018 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Contraceptive prevalence rate " span={3}>
                                            Contraceptive prevalence rate
                                        </Descriptions.Item>
                                        <Descriptions.Item label="HIV/AIDS - adult prevalence rate " span={3}>
                                            0.1% (2018 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="HIV/AIDS - people living with HIV/AIDS " span={3}>
                                            160,000 (2018 est.)
                                        </Descriptions.Item>
                                        <Descriptions.Item label="HIV/AIDS - deaths " span={3}>
                                            6,400 (2018 est.)
                                        </Descriptions.Item>
                                    </Descriptions>
                                    <h2 className="pakistanPageHeading">Health Evaluation Province wise</h2>
                                    <Table dataSource={dataSource3}
                                        size="middle"
                                        className="pakistanTableClass"
                                        scroll={{ x: "20%", y: 340 }}
                                        columns={columns3}
                                        bordered
                                    />
                                </section>
                                <section className="detail-territory" id="sindh">
                                    <h2 className="pakistanPageHeading">Sindh</h2>
                                    <h2 className="terr-second-heading-class"> Topography :-</h2>
                                    <p className="pakistanBoldPara">
                                        Topographically, Sindh consists of three parallel belts extending from north to south: the
                                        Kīrthar Range on the west, a central alluvial plain bisected by the Indus River, and an eastern
                                        desert belt. The Kīrthar Range is composed of three parallel tiers of ridges, has little soil, and
                                        is mostly dry and barren. The fertile central plain constitutes the valley of the Indus River.
                                        This plain is about 360 miles (580 km) long and about 20,000 square miles (51,800 square
                                        km) in area and gradually slopes downward from north to south. When the river’s annual
                                        flood was magnified by unusually heavy monsoon rains in summer 2010, Sindh was hard hit
                                        by the ensuing devastation. The eastern desert region includes low dunes and flats in the
                                        north, the Achhrro Thar (“White Sand Desert”) to the south, and the Thar Desert in the
                                        southeast.
                                        </p>
                                    <h2 className="terr-second-heading-class"> Map :-</h2>
                                    <p className="pakistanBoldPara">
                                        Sindh also spelled Sind, province of southeastern Pakistan. It is bordered by the provinces of
                                        Baluchistan on the west and north, Punjab on the northeast, the Indian states of Rajasthan and
                                        Gujarat to the east, and the Arabian Sea to the south. Sindh is essentially part of the Indus
                                        River delta and has derived its name from that river, which is known in Pakistan as the
                                        Sindhu. The province of Sindh was established in 1970.
                                        </p>
                                    <h2 className="terr-second-heading-class"> Climate :-</h2>
                                    <p className="pakistanBoldPara">
                                        Sindh has a subtropical climate and experiences hot summers and cold winters.
                                        Temperatures frequently rise above 115° F (46° C) between May and August, and the
                                        average low temperature of 36° F (2° C) occurs in December and January. Annual
                                        precipitation averages about 7 inches (180 mm), falling mainly during July and August.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Agriculture And Industrialization :-</h2>
                                    <p className="pakistanBoldPara">
                                        Agriculture is the chief source of income and employment in Punjab. Much of the province
                                        once consisted of desert wastes that were unfavourable for settlement, but its character
                                        changed after an extensive network of irrigation canals was built in the early 20th century
                                        using the waters of the Indus tributaries. The area of settlement, which had formerly been
                                        limited to the north and northeast, was enlarged to include the whole province, and now about
                                        three-quarters of the province’s cultivable land is irrigated. Wheat and cotton are the principal
                                        crops. Other crops grown include rice, sugarcane, millet, corn (maize), oilseeds, pulses, fruits,
                                        and vegetables. Livestock and poultry are raised in large numbers.
                                        Punjab is one of the more industrialized provinces in Pakistan; its manufacturing industries
                                        produce textiles, machinery, electrical appliances, surgical instruments, metals, bicycles and
                                        rickshaws, floor coverings, and processed foods. Pakistan’s main north-south road and
                                        railway connect Lahore with Islamabad, the capital of Pakistan, to the north and with the
                                        ocean port of Karachi to the south. Punjab is connected by road or railway to India, China,
                                        and Afghanistan, and its major cities are linked by road. Lahore’s airport provides domestic
                                        service. The University of the Punjab and the University of Engineering and Technology are
                                        in Lahore, as are other colleges, museums, libraries, and cultural centres.
                                    </p>
                                    <h2 className="terr-second-heading-class">Land :-</h2>
                                    <p className="pakistanBoldPara">
                                        Except for the irrigated Indus River valley, the province is arid and has scant vegetation.
                                        The dwarf palm, kher (Acacia rupestris), and lohirro (Tecoma undulata) trees are
                                        characteristic of the western hill region. In the central valley, the babul tree is the most
                                        dominant and occurs in thick forests along the banks of the Indus. Mango, date palm, banana,
                                        guava, and orange are typical fruit-bearing trees cultivated in the Indus valley. The coastal
                                        strip and the creeks abound in semiaquatic and aquatic plants.
                                    </p>
                                    <h2 className="terr-second-heading-class">Population & Economy :-</h2>
                                    <p className="pakistanBoldPara">
                                        The population has grown rapidly since 1947 and is concentrated in the cities and the
                                        irrigated central valley. The pace of urbanization has also been swift, and two of the largest
                                        cities in Pakistan, Karachi and Hyderabad, are in the province.
                                        Agriculture is the basis of the economy. Sindh’s agricultural productivity increased
                                        substantially after 1961 because of advances in agricultural research, the use of inorganic
                                        fertilizers, and the construction of surface drains to relieve waterlogging and salinity in
                                        surface soils. Sindh’s largest water project, the Gudu Barrage, provides water for irrigation.
                                        Cotton, wheat, rice, sugarcane, corn (maize), millet, and oilseeds are the major crops in the
                                        province. There are also many orchards yielding mangoes, dates, bananas, and other fruits.
                                        Livestock raising is also important, with cattle, buffalo, sheep, and goats the main animals
                                        kept. Sindh’s coastal waters contain prawns and shrimp, pomfrets, shad, and catfish in
                                        abundance.
                                        Sindh is one of Pakistan’s most industrialized regions, with much of its large-scale
                                        manufacturing centered in Karachi. The province accounts for a substantial part of the
                                        country’s entire raw-cotton production and contains many of the nation’s cotton mills.
                                        Several large cement factories turn out much of Pakistan’s cement products, and there is a
                                        sugar industry with many mills. There are also plants producing steel and automobiles. Two
                                        major highways, running along the east and west banks of the Indus River respectively,
                                        traverse the province from south to north. Karachi is connected by road and railway to Lahore
                                        in Punjab province and to Quetta in Baluchistan province. The Indus and some of its channels
                                        have served as the main waterways since time immemorial. These waterways are now mainly
                                        used for the transport of grain and other agricultural products. Karachi is Pakistan’s major

                                        port. Karachi is the stronghold of the national press. Major universities include Sindh
                                        University, Center in Hyderabad, and Karachi University. The Sindhi Adabi (literary) board,
                                        which publishes works on Sindhi culture, and the Sindh-Provincial Museum and Library are
                                        in Hyderabad; libraries in Karachi include the State Bank of Pakistan Library, the Liaquat
                                        Memorial Library, and others.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Languages :-</h2>
                                    <p className="pakistanBoldPara">
                                        The major indigenous languages in Sindh are Sindhi, Seraiki, and Balochi. With the entry of
                                        numerous linguistic groups from India after 1947, other languages have come to be spoken in
                                        the urban areas. Of these, the most common is Urdu, followed by Punjabi, Gujarati, and
                                        Rajasthani. The national official language, Urdu, is taught in the province’s schools, along
                                        with Sindhi. The province’s population is overwhelmingly Muslim.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Migrating Activity :-</h2>
                                    <p className="pakistanBoldPara">
                                        Sizable and ongoing migration to the province has resulted in an ethnically mixed
                                        population. Indigenous groups are the Mehs, or Muhannas, descendants of the ancient Mēds;
                                        Sammas and the related Lakhas, Lohānās, Nigamaras, Kahahs, and Channas; Sahtas, Bhattīs,
                                        and Thakurs of Rajput origin; Jats and Lorras, both admixtures of the ancient Scythian and
                                        the later Baloch peoples; and Jokhia and Burfat. With the advent of Islam in the region in the
                                        8th century, groups of Arab, Persian, and Turkish origin settled in Sindh: the most numerous
                                        among these were the Baloch, who, beginning in the 13th century, migrated to Sindh and
                                        made it their second homeland after Baluchistan. Another great change occurred with the
                                        influx of Muslim refugees from India after the partition of the subcontinent in 1947; a
                                        substantial part of the population is now descended from refugees from India.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Area :-</h2>
                                    <p className="pakistanBoldPara">
                                        54,407 square miles (140,914 square km).
                                    </p>
                                    <h2 className="terr-second-heading-class"> Provincial Capital :-</h2>
                                    <p className="pakistanBoldPara">
                                        Karachi
                                    </p>
                                    <h2 className="terr-second-heading-class"> Population :-</h2>
                                    <p className="pakistanBoldPara">
                                        (2006 est.) 35,864,000.
                                    </p>
                                </section>
                                <section className="detail-territory" id="punjab">
                                    <h2 className="pakistanPageHeading">Punjab</h2>
                                    <h2 className="terr-second-heading-class"> Topography :-</h2>
                                    <p className="pakistanBoldPara">
                                        Punjab’s area mostly consists of an alluvial plain formed by the southward-flowing Indus
                                        River and its four major tributaries in Pakistan, the Jhelum, Chenab, Ravi, and Sutlej rivers.
                                        The general slope of the land is from northeast to southwest, but it rises in the areas between
                                        rivers. The alluvial plain has a diversity of landforms: its active floodplains are flooded every
                                        rainy season and contain changing river channels, while meander floodplains lying adjacent
                                        to the active floodplain are marked by relict and abandoned channels. In the northern parts of
                                        the province are the Murree and Rawalpindi and the Pabbi hills, part of the Sub-Himalayas,
                                        and in the far north is the Potwar Plateau. Although the region is a traditional floodplain, the
                                        extraordinary flooding of the Indus River in the summer of 2010 was especially disastrous in
                                        Punjab, where millions of people were affected (by some estimates, one-half of all Pakistanis
                                        affected were in Punjab). The government’s failure to alert the public of the impending
                                        disaster elicited much criticism; some felt that officials, having had previous experience
                                        handling flooding there, should have been able to provide Punjabis with more forewarning.
                                        </p>
                                    <h2 className="terr-second-heading-class"> Map :-</h2>
                                    <p className="pakistanBoldPara">
                                        Punjab, province of eastern Pakistan. It is bordered by the Indian state of Jammu and
                                        Kashmir to the northeast, the Indian states of Punjab and Rajasthan to the east, Sindh
                                        province to the south, Balochistan and Khyber Pakhtunkhwa provinces to the west, and
                                        Islamabad federal capital area and Azad Kashmir to the north. The provincial capital, Lahore,
                                        is in the east-central region, near the border with India. The name Punjab means “five
                                        waters,” or “five rivers,” and signifies the land drained by the Jhelum, Chenab, Ravi, Beas,
                                        and Sutlej rivers, which are tributaries of the Indus River.
                                        </p>
                                    <h2 className="terr-second-heading-class"> Climate :-</h2>
                                    <p className="pakistanBoldPara">
                                        Punjab lies on the margin of the monsoon climate. The temperature is generally hot, with
                                        marked variations between summer and winter. In the plain the mean June temperature
                                        reaches the mid-90s F (mid-30s C), while the mean January temperature is in the mid-50s F
                                        (low 10s C). The average annual precipitation is low, except in the sub-Himalayan and
                                        northern areas, and decreases markedly from north to south or southwest, from 23 inches
                                        (580 mm) at Lahore in east-central Punjab to just 7 inches (180 mm) at Multan in the
                                        southwest.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Agriculture And Industrialization :-</h2>
                                    <p className="pakistanBoldPara">
                                        Agriculture is the chief source of income and employment in Punjab. Much of the province
                                        once consisted of desert wastes that were unfavourable for settlement, but its character
                                        changed after an extensive network of irrigation canals was built in the early 20th century
                                        using the waters of the Indus tributaries. The area of settlement, which had formerly been
                                        limited to the north and northeast, was enlarged to include the whole province, and now about
                                        three-quarters of the province’s cultivable land is irrigated. Wheat and cotton are the principal
                                        crops. Other crops grown include rice, sugarcane, millet, corn (maize), oilseeds, pulses, fruits,
                                        and vegetables. Livestock and poultry are raised in large numbers.
                                        Punjab is one of the more industrialized provinces in Pakistan; its manufacturing industries
                                        produce textiles, machinery, electrical appliances, surgical instruments, metals, bicycles and
                                        rickshaws, floor coverings, and processed foods. Pakistan’s main north-south road and
                                        railway connect Lahore with Islamabad, the capital of Pakistan, to the north and with the
                                        ocean port of Karachi to the south. Punjab is connected by road or railway to India, China,
                                        and Afghanistan, and its major cities are linked by road. Lahore’s airport provides domestic
                                        service. The University of the Punjab and the University of Engineering and Technology are
                                        in Lahore, as are other colleges, museums, libraries, and cultural centres.
                                    </p>
                                    <h2 className="terr-second-heading-class">Land :-</h2>
                                    <p className="pakistanBoldPara">
                                        Punjab is Pakistan’s second largest province, after Baluchistan, and the most densely
                                        populated. Area 79,284 square miles (205,345 square km). When the Indian subcontinent
                                        received its independence in 1947, Punjab was split between Pakistan and India, with the
                                        larger western portion becoming part of Pakistan. The present provincial boundaries were
                                        established in 1970.
                                    </p>
                                    <h2 className="terr-second-heading-class">Population, Language & Economy :-</h2>
                                    <p className="pakistanBoldPara">
                                        Punjab is the most densely populated province of Pakistan, containing more than half the
                                        country’s total population as well as several of its major cities: Lahore, Faisalabad,
                                        Rawalpindi, Multan, and Gujranwala. There is considerable rural-to-urban migration in the
                                        province, especially to the larger cities. In religion, the province is almost entirely Muslim,
                                        with a small Christian minority. Punjabi is the mother tongue of the great majority of the
                                        population. The main written language is Urdu, followed by English. The major ethnic
                                        groups are the Jat, Rajput, Arain, Gujar, and Awan. The caste system is gradually becoming
                                        blurred as a result of increasing social mobility, inter-caste marriages, and changing public
                                        opinion.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Area :-</h2>
                                    <p className="pakistanBoldPara">
                                        79,284 square miles (205,345 square km).
                                    </p>
                                    <h2 className="terr-second-heading-class"> Provincial Capital :-</h2>
                                    <p className="pakistanBoldPara">
                                        Lahore
                                    </p>
                                    <h2 className="terr-second-heading-class"> Population :-</h2>
                                    <p className="pakistanBoldPara">
                                        (2011 est.) 91,379,615.
                                    </p>
                                </section>
                                <section className="detail-territory" id="balochistan">
                                    <h2 className="pakistanPageHeading">Balochistan</h2>
                                    <h2 className="terr-second-heading-class"> Topography :-</h2>
                                    <p className="pakistanBoldPara">
                                        There are four major physical regions in Balochistan. The upper highlands of the central and
                                        north-eastern areas are bounded by the Sulaiman Range to the east and the Toba Kakar Range
                                        to the northwest. The lower highlands include the eastern slopes of the Sulaiman Range; the
                                        lower ranges of the Makran, Kharan, and Chagai on the west; and the Pab and Kirthar ranges
                                        on the southeast. These highland regions are primarily inhabited by nomadic herdsmen. Flat
                                        plains extend northward along the coast into the mountains; in the northwest an arid desert
                                        region consists of the Chagai, Kharan, and Makran deserts and the swamps of Lora and
                                    Mashkel.</p>
                                    <h2 className="terr-second-heading-class"> Climate :-</h2>
                                    <p className="pakistanBoldPara">
                                        The upper highlands drain into the Indus River, and the lower highlands drain northward
                                        into the swamps or southward into the Arabian Sea. Outside the influence of the Asian
                                        monsoon, most of the province is dry with continental extremes of heat and cold.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Agriculture :-</h2>
                                    <p className="pakistanBoldPara">
                                        Agriculture is limited by the scarcity of water, power, and adequate transportation facilities.
                                        Wheat, jowar (sorghum), and rice are the major food crops, and fruits are the principal cash
                                        crops. Sheep raising employs the great majority of the population and occupies most of the
                                        land. The sheep provide a high-quality wool, part of which is exported. Almost all industry is
                                        small-scale; it includes cotton and woollen manufacturing, food processing, carpet making,
                                        textile and leather embroidery, small machinery and appliance manufacturing, and
                                        handicrafts. The transportation network is poorly developed, but roads connect the major
                                        towns, and Quetta is connected by road to the ocean port of Karachi in Sindh province.
                                        Quetta is a centre of the railway network, and its airport offers domestic service.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Education and Land :-</h2>
                                    <p className="pakistanBoldPara">
                                        The University of Balochistan was established in Quetta in 1970. The Balochi Academy and
                                        the Pashto Academy, also in Quetta, promote the preservation of traditional cultures. Area
                                        134,051 square miles (347,190 square km). Pop. (2003 est.) 7,450,000.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Area :-</h2>
                                    <p className="pakistanBoldPara">
                                        347,190 km².
                                    </p>
                                    <h2 className="terr-second-heading-class"> Provincial Capital :-</h2>
                                    <p className="pakistanBoldPara">
                                        Quetta
                                    </p>
                                    <h2 className="terr-second-heading-class"> Population :-</h2>
                                    <p className="pakistanBoldPara">
                                        (2017 est.) 12.34 million.
                                    </p>
                                </section>
                                <section className="detail-territory" id="kpk">
                                    <h2 className="pakistanPageHeading">KPK</h2>
                                    <h2 className="terr-second-heading-class"> Topography :-</h2>
                                    <p className="pakistanBoldPara">
                                        The fertile Vale of Peshawar extends northward along the Kabul River. Though it covers
                                        less than one-tenth of the province’s area, this region contains about half of its total
                                        population. The city of Peshawar lies in the western portion of the vale. West of Peshawar,
                                        the historic Khyber Pass is strategically important as the most easily negotiable route between
                                        Afghanistan and the Indian subcontinent. South of the Kabul River lies the east-west-trending
                                        Spīn Ghar (Safīd Kūh) Range. The Kurram, Tochi, and Gumal rivers drain the province’s
                                        southern region, and the Indus River forms part of the province’s eastern border.
                                        Peshawar lies on an east-west road that connects Kabul, Afghanistan, to Islamabad, the
                                        capital of Pakistan. A major north-south road traverses the province, and an east-west railway
                                        runs from the Afghanistan border through Peshawar to Lahore in Punjab province. A major
                                        airport is in Peshawar. Peshawar is the site of the University of Peshawar (1950), the
                                        Peshawar Museum, and other colleges and cultural institutes.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Map :-</h2>
                                    <p className="pakistanBoldPara">
                                        Khyber Pakhtunkhwa, formerly North-West Frontier Province, northernmost province of
                                        Pakistan. It is bounded by Afghanistan to the west and north, Azad Kashmir and the Northern
                                        Areas (the Pakistani-administered areas of the Kashmir region) to the east and northeast,
                                        Punjab province to the southeast, and Baluchistan province to the southwest. On the western
                                        boundary of Khyber Pakhtunkhwa, along the Afghan border, are the federally administered
                                        tribal areas, a series of semiautonomous areas that are ethnically homogeneous with the
                                        province but not politically connected to it. Peshawar is the provincial capital.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Geography :-</h2>
                                    <p className="pakistanBoldPara">
                                        The terrain consists of mountain ranges, undulating submontane areas, and plains
                                        surrounded by hills. In the north the mountain ranges generally run north-south; south of the
                                        Kabul River, which bisects the province from east to west, the ranges generally run east-west.
                                        The Hindu Kush region in the north, long noted for its scenic beauty, is divided by the Kunar
                                        River into two distinct ranges: the northern Hindu Kush and the Hindu Raj. Tirich Mir rises
                                        to 25,230 feet (7,690 metres) and is the highest peak of the northern Hindu Kush. To the
                                        south of the Hindu Raj lie the rugged basins of the Panjkora, Swat, and Kandia rivers. The
                                        Lesser Himalayas and the Sub-Himalayas are situated in the eastern part of the province and
                                        form definite ranges broken by hilly country and small plains. The region is seismically
                                        active, with frequent mild to moderate tremors. In 2005 a severe earthquake cantered in
                                        nearby Azad Kashmir killed thousands.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Climate :-</h2>
                                    <p className="pakistanBoldPara">
                                        The climate varies with elevation. The mountain ranges experience cold winters and cool
                                        summers, and temperatures rise markedly toward the south. Precipitation over the province is
                                        variable but averages roughly 16 inches (400 mm) annually, with much of this occurring
                                        during the period from January to April.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Land :-</h2>
                                    <p className="pakistanBoldPara">
                                        Area province, 28,773 square miles (74,521 square km); federally administered tribal areas,
                                        10,509 square miles (27,220 square km). Pop. (2006 est.) province, 21,392,000; federally
                                        administered tribal areas, 3,621,000.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Language :-</h2>
                                    <p className="pakistanBoldPara">
                                        Khyber Pakhtunkhwa is inhabited mainly by the Pashtun, who are noted for their
                                        independence. The Pashtun comprise many tribes and clans, each taking great pride in its
                                        genealogy. Pashto is the main language in the province, except for some areas where Punjabi
                                        predominates, and virtually all the population is Muslim. Only a small part of the overall
                                        population is urban. The province’s major cities include Peshawar, Mardan, Mingaora,
                                        Kohat, and Abbottabad.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Education and Population :-</h2>
                                    <p className="pakistanBoldPara">
                                        Educational progress in the province has been quite slow, and the literacy rate among the
                                        total population is lower than that of Pakistan as a whole. In the tribal areas on the province’s
                                        western fringe, the Pashtun tribes are free to govern themselves according to their own
                                        customs. Political and military agents who are responsible to the central government have the
                                        power to award or withhold subsidies and to control entry into and departure from the tribal
                                        areas. The border with neighbouring Afghanistan, however, has traditionally been porous,
                                        and Pashtun tribesmen have moved between countries with little interference.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Economy :-</h2>
                                    <p className="pakistanBoldPara">
                                        The province’s economy is essentially agricultural, even though the mountainous terrain is
                                        not favourable to extensive cultivation. Irrigation is carried out on about one-third of the
                                        cultivated land. Wheat, corn (maize), sugarcane, and tobacco are the major crops. The
                                        principal industries are the manufacture and refining of sugar, the canning and preservation of
                                        fruits and vegetables, tobacco processing, and the manufacture of small arms and accessories.
                                        Other products are cotton textiles, cement, ghee (clarified butter), furniture, and milled
                                        grains.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Area :-</h2>
                                    <p className="pakistanBoldPara">
                                        101,741 km².
                                    </p>
                                    <h2 className="terr-second-heading-class"> Provincial Capital :-</h2>
                                    <p className="pakistanBoldPara">
                                        Peshawar
                                    </p>
                                    <h2 className="terr-second-heading-class"> Population :-</h2>
                                    <p className="pakistanBoldPara">
                                        (2017 est.) 35.53 million.
                                    </p>
                                </section>
                                <section className="detail-territory" id="gilgit">
                                    <h2 className="pakistanPageHeading">GILGIT BALTISTAN</h2>
                                    <h2 className="terr-second-heading-class"> Map :-</h2>
                                    <p className="pakistanBoldPara">
                                        Gilgit-Baltistan is represented at the UNPO by the Gilgit-Baltistan Democratic Alliance
                                        (GBDA) an umbrella organization which also represents groups such as the Balawaristan
                                        National Front, Karakoram National Movement, Gilgit Baltistan United Movement, the Bolor
                                        Research Forum and the Gilgit Baltistan Laddakh Democratic Movement. These groups
                                        remain committed to non-violent methods of advocacy, despite a deteriorating situation on
                                        the ground.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Overview :-</h2>
                                    <p className="pakistanBoldPara">
                                        Pakistan-occupied Gilgit-Baltistan comprises approximately 72.000 km² of territory,
                                        bordering Afghanistan to the north, the Xinjiang province of China to the northeast, the
                                        Pakistani administrated state of Azad, Jammu and Kashmir (AJK) to the south and the Indian
                                        administrated state of Jammu and Kashmir to the southeast. With an estimated population of
                                        2 million, Gilgit-Baltistan’s legal identity and constitutional status has been disputed ever
                                        since the Indo-Pakistani partition in 1947. The area is currently under the occupation of
                                        Pakistan, in violation of the United Nations Commission for India and Pakistan (UNCIP)
                                        resolution of 28 April 1949. The occupation took place without the consent of the people of
                                        Gilgit-Baltistan and, despite the UNCIP’s calls for Pakistan to withdraw its forces from the
                                        disputed area, the occupation remains to this day. For over 60 years now, the area of Gilgit-
                                        Baltistan is lacking a proper constitutional status, a working legal system and political
                                        autonomy.
                                        The critical shortage of a democratic setup in the region has led to constant human rights
                                        violations, extreme poverty, low literacy rates, slow economic development and growing
                                        sectarian turbulence. While Islamabad earns billions in revenue from Gilgit-Baltistan
                                        annually from trade and transit, water resource exploitation, trophy hunting, eco-tourism,
                                        mineral exploration and direct and indirect federal taxes, most of these earnings are not
                                        allocated for the development of the region.
                                        Moreover, the China-Pakistan Economic Corridor (CPEC) cuts through the territory of
                                        Gilgit-Baltistan, forcing the local population to accept the terms and conditions of the
                                        development project without consultation nor compensation.
                                        Deprived of accountable governance structures, as well as of constitutional and human rights,
                                        more than two million people in the region wait for their fate to be resolved. Declared a
                                        disputed territory by the UNSC in 1948, the United Nations has the responsibility to fulfil the

                                        fundamental rights of the people of Gilgit-Baltistan. The international community, in turn,
                                        must remind Islamabad that it is an occupier in Gilgit-Baltistan.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Current Issues :-</h2>
                                    <p className="pakistanBoldPara">
                                        A confluence of many different cultures and languages, especially those related to Tibet,
                                        Central Asia and India, Gilgit-Baltistan today faces what some experts call a &quot;cultural
                                        genocide&quot;. Pakistan&#39;s educational policy bans mother tongue learning as a strategy to promote
                                        cultural assimilation and to erode indigenous identities. Plans to implement Mandarin as an
                                        optional language in schools of Gilgit-Baltistan have further raised concerns over the
                                        linguistic heritage of the region.
                                        Pakistan-occupied Gilgit-Baltistan has also suffered from sectarian conflicts fuelled by
                                        Pakistan&#39;s policies since 1947. The first major sectarian clash in Gilgit-Baltistan occurred
                                        when anti-Shia riots broke out in May 1988 over the sighting of the Ramadan moon. In 2012,
                                        sectarian violence resurged, triggered by a quick succession of well-organised killings
                                        targeting Shia travellers on the three routes that connect Gilgit-Baltistan with Islamabad,
                                        killing more than sixty innocent people.
                                        Besides, the China-Pakistan Economic Corridor (CPEC), intended to connect Western China
                                        to the Indian Ocean via Pakistan, cuts through the territory of Gilgit-Baltistan and is directly
                                        affecting more than 400,000 indigenous people and at least 200 square kilometres of natural
                                        environment and cultural heritage sites. The implementation of the project is being violently
                                        enforced against the will of the local population, who view the CPEC as a threat to their
                                        culture and natural resources.
                                        Beyond the CPEC, Pakistan plans to build five mega dams in the disputed area, in violation
                                        of the resolutions adopted by the United Nations Commission for India and Pakistan
                                        (UNCIP). Altered stream flow and nutrient contents, for example, are expected to cause
                                        changes in the habitat, resulting in other downstream effects on water supply and fisheries.
                                        The people of Gilgit-Baltistan firmly believe that Pakistan has no right to build a dam in an
                                        area which is disputed and whose fate is still to be settled under the UNCIP resolutions.
                                        Finally, for over six decades now, Gilgit-Baltistan has seen systematic human rights
                                        violations occurring on its soil. Its people continue to live in a constitutional limbo, where the
                                        Pakistani government does not include the region in its constitution but doesn&#39;t give its
                                        people their right to self-determination or political representation either. The population of
                                        Gilgit-Baltistan is also stripped from its freedom of movement, of speech, its right to peaceful
                                        protest and freedom of association.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Area :-</h2>
                                    <p className="pakistanBoldPara">
                                        72,971 km².
                                    </p>
                                    <h2 className="terr-second-heading-class"> Provincial Capital :-</h2>
                                    <p className="pakistanBoldPara">
                                        Gilgit
                                    </p>
                                    <h2 className="terr-second-heading-class"> Population :-</h2>
                                    <p className="pakistanBoldPara">
                                        1.9 million.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Languages :-</h2>
                                    <p className="pakistanBoldPara">
                                        Urdu, Shina, Burushaski, Balti, Tibetan, Wakhi, Khowar.
                                    </p>
                                    <h2 className="terr-second-heading-class"> UNPO Representation :-</h2>
                                    <p className="pakistanBoldPara">
                                        Gilgit-Baltistan Democratic Alliance.
                                    </p>
                                </section>
                                <section className="detail-territory" id="gilgit">
                                    <h2 className="pakistanPageHeading">AZAD KASHMIR</h2>
                                    <h2 className="terr-second-heading-class"> Map :-</h2>
                                    <p className="pakistanBoldPara">
                                        Kashmir, region of the north-western Indian subcontinent. It is bounded by the Uygur
                                        Autonomous Region of Xinjiang to the northeast and the Tibet Autonomous Region to the
                                        east (both parts of China), by the Indian states of Himachal Pradesh and Punjab to the south,
                                        by Pakistan to the west, and by Afghanistan to the northwest. The region, with a total area of
                                        some 85,800 square miles (222,2236 square km), has been the subject of dispute between
                                        India and Pakistan since the partition of the Indian subcontinent in 1947. The northern and
                                        western portions are administered by Pakistan and comprise three areas: Azad Kashmir,
                                        Gilgit, and Baltistan, the last two being part of a territory called the Northern Areas.
                                        Administered by India are the southern and south-eastern portions, Jammu and Kashmir and
                                        Ladakh. The Indian- and Pakistani-administered portions are divided by a “line of control”
                                        agreed to in 1972, although neither country recognizes it as an international boundary. In
                                        addition, China became active in the eastern area of Kashmir in the 1950s and has controlled
                                        the north-eastern part of Ladakh (the easternmost portion of the region) since 1962.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Land and People :-</h2>
                                    <p className="pakistanBoldPara">
                                        The Kashmir region is predominantly mountainous, with deep, narrow valleys and high,
                                        barren plateaus. The relatively low-lying Jammu and Punch (Poonch) plains in the southwest
                                        are separated by the thickly forested Himalayan foothills and the Pir Panjal Range of the
                                        Lesser Himalayas from the larger, more fertile, and more heavily populated Vale of Kashmir
                                        to the north. The vale, situated at an elevation of about 5,300 feet (1,600 metres), constitutes
                                        the basin of the upper Jhelum River and contains the city of Srinagar. Jammu and the vale lie
                                        in Indian-administered Jammu and Kashmir, while the Punch lowlands are largely in Azad
                                        Kashmir.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Topography :-</h2>
                                    <p className="pakistanBoldPara">
                                        Rising northeast of the vale is the western part of the Great Himalayas, the peaks of which
                                        reach elevations of 20,000 feet (6,100 metres) or higher. Farther to the northeast is the high,
                                        mountainous plateau region of Ladakh, which is cut by the rugged valley of the
                                        northwestward-flowing Indus River. Extending roughly northwestward from the Himalayas
                                        are the lofty peaks of the Karakoram Range, including K2 (Mount Godwin Austen), which at
                                        28,251 feet (8,611 metres) is the second highest peak in the world, after Mount Everest.
                                        The region is located along the northernmost extremity of the Indian-Australian tectonic
                                        plate. The subduction of that plate beneath the Eurasian Plate—the process that for roughly
                                        50 million years has been creating the Himalayas—has produced heavy seismic activity in
                                        Kashmir. One especially powerful earthquake in 2005 devastated Muzaffarabad, which is the

                                        administrative centre of Azad Kashmir, and adjacent areas including parts of India’s Jammu
                                        and Kashmir state and Pakistan’s North-West Frontier Province.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Climate :-</h2>
                                    <p className="pakistanBoldPara">
                                        The climate of the region ranges from subtropical in the southwestern lowlands to alpine
                                        throughout the high mountain areas. Precipitation is variable; it is heavier in areas that can be
                                        reached by the monsoonal winds west and south of the great ranges and sparse to the north
                                        and east where continental conditions prevail.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Language :-</h2>
                                    <p className="pakistanBoldPara">
                                        The people in the Jammu area are Muslim in the west and Hindu in the east and speak
                                        Hindi, Punjabi, and Dogri. The inhabitants of the Vale of Kashmir and the Pakistani areas are
                                        mostly Muslim and speak Urdu and Kashmiri. The sparsely inhabited Ladakh region and
                                        beyond is home to Tibetan peoples who practice Buddhism and speak Balti and Ladakhi.
                                    </p>
                                    <h2 className="terr-second-heading-class">The Kashmir Dispute :-</h2>
                                    <p className="pakistanBoldPara">
                                        If the territory’s existence was guaranteed by the United Kingdom, the weaknesses in its
                                        structure and along its peripheries were not of great consequence, but they became apparent
                                        after the British withdrawal from South Asia in 1947. By the terms agreed to by India and
                                        Pakistan for the partition of the Indian subcontinent, the rulers of princely states were given
                                        the right to opt for either Pakistan or India or with certain reservations to remain independent.
                                        Hari Singh, the maharaja of Kashmir, initially believed that by delaying his decision he could
                                        maintain the independence of Kashmir, but, caught up in a train of events that included a
                                        revolution among his Muslim subjects along the western borders of the state and the
                                        intervention of Pashtun tribesmen, he signed an Instrument of Accession to the Indian union
                                        in October 1947. This was the signal for intervention both by Pakistan, which considered the
                                        state to be a natural extension of Pakistan, and by India, which intended to confirm the act of
                                        accession. Localized warfare continued during 1948 and ended, through the intercession of
                                        the United Nations, in a cease-fire that took effect in January 1949. In July of that year, India
                                        and Pakistan defined a cease-fire line the line of control that divided the administration of the
                                        territory. Regarded at the time as a temporary expedient, the partition along that line still
                                        exists.
                                        Many proposals were subsequently made to end the dispute over Kashmir, but tensions
                                        mounted between the two countries following the Chinese incursion into Ladakh in 1962, and
                                        warfare broke out between India and Pakistan in 1965. A cease-fire was established in
                                        September, followed by an agreement signed by the two sides at Tashkent (Uzbekistan) in
                                        early January 1966, in which they resolved to try to end the dispute by peaceful means.
                                        Fighting again flared up between the two in 1971 as part of the India-Pakistan war that
                                        resulted in the creation of Bangladesh. An accord signed in the Indian city of Shimla in 1972
                                        expressed the hope that henceforth the countries in the region would be able to live in peace
                                        with each other. It was widely believed that Zulfikar Ali Bhutto, then prime minister of

                                        Pakistan, might have tacitly accepted the line of control as the de facto border, although he
                                        later denied this. After Bhutto was arrested in 1977 and executed in 1979, the Kashmir issue
                                        once again became the leading cause of conflict between India and Pakistan.
                                        Several movements have variously sought a merger of Kashmir with Pakistan, independence
                                        for the region from both India and Pakistan, or the granting of Indian union territory status to
                                        Buddhist Ladakh. To contend with these movements, confront Pakistani forces along the
                                        cease-fire line, and support the administrative structure of Jammu and Kashmir state, the
                                        Indian union government has maintained a strong military presence there, especially since the
                                        end of the 1980s.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Area :-</h2>
                                    <p className="pakistanBoldPara">
                                        85,800 square miles (222,236 square km)
                                    </p>
                                    <h2 className="terr-second-heading-class"> Provincial Capital :-</h2>
                                    <p className="pakistanBoldPara">
                                        Muzaffarabad.
                                    </p>
                                    <h2 className="terr-second-heading-class"> Population :-</h2>
                                    <p className="pakistanBoldPara">
                                        (2011est.) 12.5 million.
                                    </p>
                                </section>
                            </div>
                        </Content>
                        <MyFooter />
                    </Layout>
                </>}
            </ThemeContext.Consumer>
        </>
    )
}

export default Territories