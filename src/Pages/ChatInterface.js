import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';

export default function ChatInterface() {

  const steps = [
    {
      id: 'Greet',
      message: "Hello! Welcome to AI-Recruitment Platform. Please provide your company's details.",
      trigger: 'AskCompanyName'
    },
    {
      id: 'AskCompanyName',
      message: 'Please enter your company name:',
      trigger: 'CompanyName'
    },
    {
      id: 'CompanyName',
      user: true,
      trigger: 'AskCompanyType'
    },
    {
      id: 'AskCompanyType',
      message: 'What type of company are you? Please select:',
      trigger: 'CompanyType'
    },
    {
      id: 'CompanyType',
      options: [
        { value: 'tech', label: 'Technology', trigger: 'TechSelected' },
        { value: 'health', label: 'Healthcare', trigger: 'HealthSelected' },
        { value: 'finance', label: 'Finance', trigger: 'FinanceSelected' }
      ]
    },
    {
      id: 'TechSelected',
      message: 'Great! We specialize in tech. How many positions are you looking to fill?',
      trigger: 'PositionsNumber'
    },
    {
      id: 'HealthSelected',
      message: 'Excellent! Healthcare is a growing field. How many positions are you looking to fill?',
      trigger: 'PositionsNumber'
    },
    {
      id: 'FinanceSelected',
      message: 'Wonderful! Finance is crucial in today\'s economy. How many positions are you looking to fill?',
      trigger: 'PositionsNumber'
    },
    {
      id: 'PositionsNumber',
      user: true,
      trigger: 'ConfirmPositions'
    },
    {
      id: 'ConfirmPositions',
      message: 'Got it! You are looking to fill {previousValue} positions. How can we assist you further?',
      trigger: 'FurtherAssistance'
    },
    {
      id: 'FurtherAssistance',
      options: [
        { value: 'recruit', label: 'Assist with recruitment', trigger: 'RecruitmentOption' },
        { value: 'issue', label: 'Resolve an issue', trigger: 'IssueOption' }
      ]
    },
    {
      id: 'RecruitmentOption',
      message: 'Welcome to our AI platform. We can help streamline your recruitment process. How would you like to proceed?',
      trigger: 'RecruitmentOptions'
    },
    {
      id: 'RecruitmentOptions',
      options: [
        { value: 'learn_more', label: 'Learn more about our process', trigger: 'LearnMore' },
        { value: 'start_now', label: 'Start recruitment now', trigger: 'StartRecruitment' }
      ]
    },
    {
      id: 'LearnMore',
      message: 'Our recruitment process includes sourcing, basic matching, exact matching filtering, and value addition by AI. Would you like a detailed explanation?',
      trigger: 'MoreExplanation'
    },
    {
      id: 'MoreExplanation',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'DetailedExplanation' },
        { value: 'no', label: 'No', trigger: 'EndChat' }
      ]
    },
    {
      id: 'DetailedExplanation',
      message: 'Our sourcing involves...',
      end: true
    },
    {
      id: 'StartRecruitment',
      message: 'Let\'s get started with recruitment!',
      end: true
    },
    {
      id: 'IssueOption',
      message: 'We apologize for any inconvenience. Please describe the issue you are facing, and we\'ll do our best to resolve it.',
      trigger: 'DescribeIssue'
    },
    {
      id: 'DescribeIssue',
      user: true,
      trigger: 'ResolveIssue'
    },
    {
      id: 'ResolveIssue',
      message: 'Thank you for bringing this to our attention. We will work on resolving it promptly.',
      end: true
    },
    {
      id: 'EndChat',
      message: 'Thank you for using our services. Have a great day!',
      end: true
    }
  ];

  return (
    <div>
      <h1 style={{ color: 'white' }} className='mb-4'>Any doubts? You can chat with us</h1>
      <Segment>
      <style>
          {`
            .rsc-header {
              background-color:  #1a1224;
              color: white; 
            }
          `}
        </style>
        <ChatBot
          steps={steps}
          style={{ width: 'auto',  minWidth: '400px', Height: '500px', background:'#291c32' }}
          bubbleStyle={{ background: '#1a1224',  color:'white' }}
          contentStyle={{ background: '#291c32' }}
          inputStyle={{ background: '#1a1224', color: 'white' }}
        />
      </Segment>
    </div>
  );
}
