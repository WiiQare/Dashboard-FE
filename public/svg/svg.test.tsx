import React from 'react';
import { render } from '@testing-library/react';
import SideBarItem from '@/components/molecules/side-bar-item';
import BeneficiariesIcon from './beneficiaries-Icon';
import HealthIcon from './health-Icon';
import PayersIcon from './payers-Icon';
import PaymentsIcon from './payments-Icon';
import ProfileIcon from './profile-icon';
import VoucherIcon from './voucher-icon';
import PaymentProviderIcon from './Providers-icon';

describe('Components with similar layout', () => {
  it('should render HealthIcon without errors', () => {
    render(<HealthIcon />);
  });

  it('should render PaymentsIcon without errors', () => {
    render(<PaymentsIcon />);
  });

  it('should render BeneficiariesIcon without errors', () => {
    render(<BeneficiariesIcon />);
  });

  it('should render PayersIcon without errors', () => {
    render(<PayersIcon />);
  });

  it('should render ProfileIcon without errors', () => {
    render(<ProfileIcon />);
  });

  it('should render VoucherIcon without errors', () => {
    render(<VoucherIcon />);
  });
  it('should render VoucherIcon without errors', () => {
    render(<PaymentProviderIcon />);
  });
});
