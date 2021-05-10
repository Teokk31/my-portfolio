import { Component, OnInit } from '@angular/core';
import { format, differenceInYears, differenceInMonths } from 'date-fns'
import {} from 'module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  experiences: IExperience[] = [
    {
      company: 'EntreVenture',
      position: 'Web Developer Internship',
      startDate: new Date(2012, 2, 1),
      endDate: new Date(2012, 5, 1),
      companyLogo: 'assets/img/experience/experience_0.png',
      description:
        'First time got into web development, everything was so new and exciting. Mainly developing a web application using Ruby on Rails and integrate with Facebook API.',
      roundedCircleStyle: false,
    },
    {
      company: 'JF Apex Securities',
      position: 'ICT Officer',
      startDate: new Date(2013, 7, 1),
      endDate: new Date(2013, 9, 1),
      companyLogo: 'assets/img/experience/experience_1.png',
      description: 'Developing forms that interacting with company database using Oracle Forms Builder.',
      roundedCircleStyle: false,
    },
    {
      company: 'Web Professional House Pte Ltd',
      position: 'Web Developer',
      startDate: new Date(2013, 10, 1),
      endDate: new Date(2016, 7, 1),
      companyLogo: 'assets/img/experience/experience_2.png',
      description:
        'Develop good quality interactive web applications using ASP.NET Web Forms, Sitecore CMS, HTML, CSS, and jQuery. Work closely in functional scrum units to execute the vision of the business leaders in terms of functionality and user experience. Provide solutions, develop and maintains existing websites. Often react to small requirement changes and real-time updates required to web sites. Mentor and provides guidance to interns.',
      roundedCircleStyle: true,
    },
    {
      company: 'ViewPoint Software for Business Sdn. Bhd.',
      position: 'Software Engineer',
      startDate: new Date(2016, 7, 1),
      endDate: new Date(2019, 9, 1),
      companyLogo: 'assets/img/experience/experience_3.png',
      description:
        'Develop efileConnect web application that provides a secure cloud-based AEOI Process Management & Electronic Filing Solution using AngularJS and ASP.NET Web API. Developed API to allow third-party applications to integrate with efileConnect. Integrate efileConnect with various filing authorities’ filing systems to allow direct submission from efileConnect. Developed SSRS reporting module in efileConnect to generate custom reports.',
      roundedCircleStyle: false,
    },
    {
      company: 'Digi Telecommunications',
      position: 'Full Stack Developer',
      startDate: new Date(2019, 10, 1),
      endDate: new Date(2020, 11, 1),
      companyLogo: 'assets/img/experience/experience_4.png',
      description:
        'Lead a team for web applications/projects that focus on Cloud-based and Serverless microservices architectures. Responsible for DevOps practices and culture within the team. Mentor and provides guidance to junior full stack developers.',
      roundedCircleStyle: false,
    },
    {
      company: 'Ørsted Malaysia',
      position: '.NET Software Engineer',
      startDate: new Date(2020, 11, 4),
      endDate: new Date(),
      companyLogo: 'assets/img/experience/experience_5.png',
      description: '-',
      roundedCircleStyle: false,
    },
  ];

  constructor() {
    this.experiences = this.experiences.map((experience) => {
      const today: Date = new Date();
      const isSameDate: Boolean =
        experience.endDate.getFullYear() === today.getFullYear() && experience.endDate.getMonth() === today.getMonth() && experience.endDate.getDate() === today.getDate();
      const displayEndDate: string = isSameDate ? 'Present' : format(experience.endDate, 'MMM yyyy');
      const lengthOfServiceYears: number = differenceInYears(experience.endDate, experience.startDate);
      const lengthOfServiceMonths: number = differenceInMonths(experience.endDate, experience.startDate) % 12;
      const lengthOfServiceDisplay: string = `${lengthOfServiceYears || ''} ${
        lengthOfServiceYears === 1 ? 'year' : lengthOfServiceYears !== 1 ? 'years' : ''
      } ${lengthOfServiceMonths} ${lengthOfServiceMonths === 1 ? 'month' : 'months'}`;

      experience.lengthOfService = `${format(experience.startDate, 'MMM yyyy')} - ${displayEndDate} . ${lengthOfServiceDisplay}`;
      return experience;
    });
  }

  ngOnInit() {
    console.log('asdasd');
  }
}

export interface IExperience {
  company: string;
  position: string;
  startDate: Date;
  endDate: Date;
  lengthOfService?: string;
  companyLogo: string;
  description: string;
  roundedCircleStyle: boolean;
}