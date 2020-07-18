import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 experiences = [
    {company: 'EntreVenture', position: 'Web Developer Internship', lengthOfService: 'Mar 2012 - Jun 2012', companyLogo: 'assets/img/experience/experience_0.png', description: 'First time got into web development, everything was so new and exciting. Mainly developing a web application using Ruby on Rails and integrate with Facebook API.'},
    {company: 'JF Apex Securities', position: 'ICT Officer', lengthOfService: 'Aug 2013 – Oct 2013', companyLogo: 'assets/img/experience/experience_1.png', description: 'Developing forms that interacting with company database using Oracle Forms Builder.'},
    {company: 'Web Professional House Pte Ltd', position: 'Web Developer', lengthOfService: 'Nov 2013 – Aug 2016', companyLogo: 'assets/img/experience/experience_2.png', description: 'Develop good quality interactive web applications using ASP.NET Web Forms, Sitecore CMS, HTML, CSS, and jQuery. Work closely in functional scrum units to execute the vision of the business leaders in terms of functionality and user experience. Provide solutions, develop and maintains existing websites. Often react to small requirement changes and real-time updates required to web sites. Mentor and provides guidance to interns.'},
    {company: 'ViewPoint Software for Business Sdn. Bhd.', position: 'Software Engineer', lengthOfService: 'Aug 2016 - Oct 2019', companyLogo: 'assets/img/experience/experience_3.png', description: 'Develop efileConnect web application that provides a secure cloud-based AEOI Process Management & Electronic Filing Solution using AngularJS and ASP.NET Web API. Developed API to allow third-party applications to integrate with efileConnect. Integrate efileConnect with various filing authorities’ filing systems to allow direct submission from efileConnect. Developed SSRS reporting module in efileConnect to generate custom reports.'},
    {company: 'Digi Telecommunications', position: 'DevOps Engineer', lengthOfService: 'Nov 2019 – Present', companyLogo: 'assets/img/experience/experience_4.png', description: 'Lead a team for web applications/projects that focus on Cloud-based and Serverless microservices architectures. Responsible for DevOps practices and culture within the team. Mentor and provides guidance to junior DevOps engineers.'}
  ]


  constructor() { }

  ngOnInit() {
  }

}
