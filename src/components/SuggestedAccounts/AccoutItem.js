import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://i.ex-cdn.com/giadinhonline.vn/files/content/2022/05/31/hotgirl-nguoi-ay-la-ai-13-0045.jpg"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>DaoDucDung</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Dao Duc Dung</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
export default AccountItem;
