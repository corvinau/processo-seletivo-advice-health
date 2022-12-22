import styled from 'styled-components';

export const Container = styled.div`
  .appointment-panel {
    display: flex;
    justify-content: space-between;
  }

  .appointment-title {
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  .appointment-date {
    margin-bottom: 15px;
    text-transform: uppercase;
    font-size: 24px;
  }

  .vertical-divider {
    border-right: 1px solid #c1c1c1;
  }
  
  .appointment-list-name {
    margin-bottom: 10px;
  }

  .appointment-list-row {
    margin-bottom: 25px;
    border-radius: 8px;
    background-color: #ffffff;
  }

  .appointment-list {
    width: 100%;
  }

  .appointment-cards {
    width: 100%;
    margin-bottom: 15px;
  }

  .appointment-details {
    display: flex;
    align-items: center;
    font-size: 24px;
  }

  .appointment-hour {
    width: 100px;
  }

  .appointment-patient {
    min-width: 795px;
    max-width: 935px;
    width: 80%;
  }

  .appointment-action {
    font-size: 16px;
    width: 110px;
    
    button {
      margin-right: 5px;

      :last-child {
        margin-right: 0;
      }
    }
  }
`;