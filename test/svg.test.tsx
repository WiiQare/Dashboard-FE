import React from 'react';
import { render } from '@testing-library/react';
import BeneficiariesIcon from '../public/svg/beneficiaries-Icon';
import HealthIcon from '../public/svg/health-Icon';
import PayersIcon from '../public/svg/payers-Icon';
import PaymentsIcon from '../public/svg/payments-Icon';
import ProfileIcon from '../public/svg/profile-icon';
import VoucherIcon from '../public/svg/voucher-icon';
import PaymentProviderIcon from '../public/svg/Providers-icon';

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
