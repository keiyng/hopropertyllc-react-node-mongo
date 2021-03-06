import React, { PureComponent } from 'react';
import {reduxForm} from 'redux-form';
import ApplicationForm from './ApplicationForm';
import ApplicationFormReview from './ApplicationFormReview';

class Application extends PureComponent {
    state = { showFormReview: false };
  
    renderContent() {
      if (this.state.showFormReview) {
        return (
          <ApplicationFormReview
            onCancel={() => this.setState({ showFormReview: false })}
          />
        );
      }
  
      return (
        <div>
        <ApplicationForm
          onApplicationSubmit={() => this.setState({ showFormReview: true })}
        />
        </div>
      );
    }
  
    render() {
      return <div style={{textAlign: 'center'}}>{this.renderContent()}</div>;
    }
  }
  
  export default reduxForm({
      form: 'applicationForm'
      //default! destroyOnUnmount: true 
  })(Application);
  
