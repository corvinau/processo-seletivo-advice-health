import styled from 'styled-components';

export const Container = styled.div`
  .dashboard-panel {
    display: flex;
    justify-content: space-between;
  }

  .dashboard-search {
    margin-bottom: 25px;
  }

  .dashboard-title {
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  .dashboard-statistics {
    margin-bottom: 60px;
  }

  .statistic-attendance,
  .statistic-patient {
    margin-right: 10px;
  }

  .statistic-attendance,
  .statistic-patient,
  .statistic-billing {
    p {
      font-size: 24px;
    }
  }

  .vertical-divider {
    border-right: 1px solid #c1c1c1;
  }

  .dashboard-calendar {
    margin-bottom: 25px;
  }
  
  .dashboard-list-name {
    margin-bottom: 10px;
  }

  .dashboard-list-row {
    border-radius: 8px;
    background-color: #ffffff;
  }

  .dashboard-list {
    width: 100%;
  }
`;