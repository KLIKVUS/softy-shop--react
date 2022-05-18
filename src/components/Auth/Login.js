import React from 'react';
import { NavLink } from 'react-router-dom';


function Login() {
  return (
    <section className="auth-form flex-helper">
        <div className="auth-form__body flex-helper">
            <NavLink to="/">
                <svg width="168" height="94" viewBox="0 0 168 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_158_282)">
                    <path d="M41.8337 39.9402C39.1603 39.9402 36.8669 39.5478 34.9533 38.763C33.0397 37.9783 31.5905 36.9552 30.6055 35.6939C29.6488 34.4047 29.1422 33.0033 29.0859 31.4897C29.0859 31.2655 29.1704 31.0693 29.3392 30.9012C29.5362 30.705 29.7613 30.6069 30.0146 30.6069H35.3332C35.6709 30.6069 35.9382 30.6769 36.1352 30.8171C36.3603 30.9292 36.5854 31.1114 36.8106 31.3636C37.1764 32.0924 37.7673 32.6949 38.5834 33.1714C39.3995 33.6479 40.4829 33.8861 41.8337 33.8861C43.4377 33.8861 44.6618 33.6339 45.506 33.1294C46.3503 32.6249 46.7724 31.9382 46.7724 31.0693C46.7724 30.4527 46.5472 29.9482 46.097 29.5558C45.6749 29.1634 44.9995 28.8131 44.0709 28.5048C43.1422 28.1964 41.7634 27.8461 39.9342 27.4537C36.5573 26.753 34.0246 25.73 32.3362 24.3846C30.6759 23.0113 29.8457 21.0633 29.8457 18.5408C29.8457 16.8311 30.3242 15.3036 31.2809 13.9582C32.2377 12.6129 33.6025 11.5618 35.3754 10.8051C37.1482 10.0483 39.2166 9.66992 41.5804 9.66992C44.0286 9.66992 46.1533 10.0903 47.9543 10.9312C49.7553 11.772 51.1201 12.8371 52.0487 14.1264C53.0055 15.3876 53.512 16.6349 53.5683 17.8681C53.5683 18.1204 53.4839 18.3306 53.3151 18.4987C53.1462 18.6669 52.9352 18.751 52.6819 18.751H47.1101C46.7724 18.751 46.491 18.6949 46.2658 18.5828C46.0689 18.4707 45.8859 18.2885 45.7171 18.0363C45.5482 17.3916 45.0839 16.8451 44.3241 16.3966C43.5924 15.9482 42.6779 15.724 41.5804 15.724C40.3141 15.724 39.3432 15.9482 38.6678 16.3966C37.9925 16.8451 37.6548 17.5038 37.6548 18.3726C37.6548 18.9612 37.8377 19.4517 38.2035 19.8441C38.5975 20.2365 39.2166 20.6009 40.0608 20.9372C40.9331 21.2455 42.1714 21.5678 43.7754 21.9042C46.3925 22.3807 48.4749 22.9832 50.0226 23.712C51.5985 24.4126 52.7522 25.3376 53.4839 26.4867C54.2156 27.6078 54.5814 29.0233 54.5814 30.733C54.5814 32.6108 54.0327 34.2505 52.9352 35.6519C51.8658 37.0252 50.3603 38.0903 48.4186 38.8471C46.505 39.5759 44.31 39.9402 41.8337 39.9402ZM70.8785 39.9402C66.9107 39.9402 63.7871 38.9732 61.5077 37.0393C59.2283 35.1054 58.0182 32.2605 57.8775 28.5048C57.8494 27.6919 57.8353 26.4867 57.8353 24.8891C57.8353 23.2635 57.8494 22.0443 57.8775 21.2315C58.0182 17.5318 59.2424 14.687 61.5499 12.6969C63.8856 10.6789 66.9951 9.66992 70.8785 9.66992C74.7619 9.66992 77.8714 10.6789 80.2072 12.6969C82.5429 14.687 83.767 17.5318 83.8795 21.2315C83.9358 22.8571 83.9639 24.0763 83.9639 24.8891C83.9639 25.6739 83.9358 26.8792 83.8795 28.5048C83.7388 32.2605 82.5288 35.1054 80.2494 37.0393C77.97 38.9732 74.8463 39.9402 70.8785 39.9402ZM70.8785 33.8861C72.4262 33.8861 73.6503 33.4237 74.5509 32.4987C75.4795 31.5738 75.9719 30.1584 76.0283 28.2525C76.0846 26.6269 76.1127 25.4777 76.1127 24.8051C76.1127 24.0763 76.0846 22.9272 76.0283 21.3576C75.9719 19.4517 75.4795 18.0363 74.5509 17.1114C73.6222 16.1864 72.3981 15.724 70.8785 15.724C69.3589 15.724 68.1348 16.1864 67.2062 17.1114C66.3056 18.0363 65.8132 19.4517 65.7288 21.3576C65.7006 22.1424 65.6866 23.2915 65.6866 24.8051C65.6866 26.2906 65.7006 27.4397 65.7288 28.2525C65.8132 30.1584 66.3056 31.5738 67.2062 32.4987C68.1067 33.4237 69.3308 33.8861 70.8785 33.8861ZM89.9121 39.5198C89.6309 39.5198 89.3777 39.4216 89.1523 39.2255C88.9556 39.0012 88.8568 38.749 88.8568 38.4687V11.1414C88.8568 10.8331 88.9556 10.5808 89.1523 10.3846C89.3777 10.1885 89.6309 10.0903 89.9121 10.0903H109.329C109.639 10.0903 109.892 10.1885 110.089 10.3846C110.286 10.5808 110.384 10.8331 110.384 11.1414V15.3876C110.384 15.6679 110.286 15.9201 110.089 16.1444C109.892 16.3406 109.639 16.4387 109.329 16.4387H96.2859V22.6189H108.485C108.795 22.6189 109.048 22.731 109.245 22.9552C109.441 23.1514 109.54 23.4036 109.54 23.712V27.9162C109.54 28.1964 109.441 28.4487 109.245 28.6729C109.048 28.8691 108.795 28.9672 108.485 28.9672H96.2859V38.4687C96.2859 38.7771 96.1872 39.0293 95.9905 39.2255C95.7938 39.4216 95.5405 39.5198 95.2307 39.5198H89.9121ZM122.506 39.5198C122.225 39.5198 121.971 39.4216 121.746 39.2255C121.549 39.0012 121.45 38.749 121.45 38.4687V16.6909H113.937C113.656 16.6909 113.403 16.5928 113.177 16.3966C112.98 16.1724 112.882 15.9201 112.882 15.6399V11.1414C112.882 10.8331 112.98 10.5808 113.177 10.3846C113.403 10.1885 113.656 10.0903 113.937 10.0903H136.646C136.956 10.0903 137.21 10.1885 137.406 10.3846C137.604 10.5808 137.702 10.8331 137.702 11.1414V15.6399C137.702 15.9482 137.604 16.2005 137.406 16.3966C137.21 16.5928 136.956 16.6909 136.646 16.6909H129.133V38.4687C129.133 38.749 129.035 39.0012 128.837 39.2255C128.641 39.4216 128.387 39.5198 128.078 39.5198H122.506ZM150.191 39.5198C149.91 39.5198 149.657 39.4216 149.431 39.2255C149.235 39.0012 149.136 38.749 149.136 38.4687V29.4297L139.343 11.4357C139.258 11.1834 139.216 11.0293 139.216 10.9732C139.216 10.749 139.301 10.5528 139.47 10.3846C139.667 10.1885 139.892 10.0903 140.145 10.0903H145.421C145.984 10.0903 146.477 10.3846 146.899 10.9732L152.935 21.8201L159.013 10.9732C159.351 10.3846 159.844 10.0903 160.491 10.0903H165.767C166.02 10.0903 166.231 10.1885 166.4 10.3846C166.569 10.5528 166.653 10.749 166.653 10.9732C166.653 11.1134 166.626 11.2675 166.569 11.4357L156.776 29.4297V38.4687C156.776 38.7771 156.664 39.0293 156.438 39.2255C156.242 39.4216 155.988 39.5198 155.679 39.5198H150.191Z" fill="#010101"/>
                    <path d="M41.8337 82.823C39.1603 82.823 36.8669 82.4306 34.9533 81.6459C33.0397 80.8611 31.5905 79.8381 30.6055 78.5768C29.6488 77.2875 29.1422 75.8861 29.0859 74.3726C29.0859 74.1483 29.1704 73.9522 29.3392 73.784C29.5362 73.5878 29.7613 73.4897 30.0146 73.4897H35.3332C35.6709 73.4897 35.9382 73.5597 36.1352 73.6999C36.3603 73.812 36.5854 73.9942 36.8106 74.2465C37.1764 74.9752 37.7673 75.5778 38.5834 76.0543C39.3995 76.5308 40.4829 76.769 41.8337 76.769C43.4377 76.769 44.6618 76.5167 45.506 76.0122C46.3503 75.5077 46.7724 74.821 46.7724 73.9522C46.7724 73.3356 46.5472 72.8311 46.097 72.4386C45.6749 72.0462 44.9995 71.6959 44.0709 71.3876C43.1422 71.0793 41.7634 70.729 39.9342 70.3365C36.5573 69.6359 34.0246 68.6128 32.3362 67.2675C30.6759 65.8941 29.8457 63.9461 29.8457 61.4236C29.8457 59.7139 30.3242 58.1864 31.2809 56.841C32.2377 55.4957 33.6025 54.4446 35.3754 53.6879C37.1482 52.9311 39.2166 52.5527 41.5804 52.5527C44.0287 52.5527 46.1533 52.9732 47.9543 53.814C49.7553 54.6548 51.1201 55.7199 52.0488 57.0092C53.0055 58.2705 53.512 59.5177 53.5683 60.7509C53.5683 61.0032 53.4839 61.2134 53.3151 61.3816C53.1462 61.5497 52.9352 61.6338 52.6819 61.6338H47.1101C46.7724 61.6338 46.491 61.5777 46.2658 61.4657C46.0689 61.3536 45.8859 61.1714 45.7171 60.9191C45.5483 60.2744 45.0839 59.7279 44.3241 59.2795C43.5924 58.831 42.6779 58.6068 41.5804 58.6068C40.3141 58.6068 39.3432 58.831 38.6678 59.2795C37.9925 59.7279 37.6548 60.3866 37.6548 61.2554C37.6548 61.844 37.8377 62.3345 38.2035 62.7269C38.5975 63.1193 39.2166 63.4837 40.0608 63.82C40.9331 64.1284 42.1714 64.4507 43.7754 64.787C46.3925 65.2635 48.4749 65.866 50.0226 66.5948C51.5985 67.2955 52.7522 68.2204 53.4839 69.3696C54.2156 70.4907 54.5814 71.9061 54.5814 73.6158C54.5814 75.4937 54.0327 77.1333 52.9352 78.5348C51.8658 79.9081 50.3603 80.9732 48.4186 81.7299C46.505 82.4587 44.31 82.823 41.8337 82.823ZM59.4393 82.4026C59.1297 82.4026 58.8765 82.3045 58.6795 82.1083C58.4826 81.9122 58.384 81.6599 58.384 81.3516V54.0242C58.384 53.7159 58.4826 53.4636 58.6795 53.2674C58.9047 53.0713 59.1579 52.9732 59.4393 52.9732H64.8845C65.1941 52.9732 65.4474 53.0713 65.6443 53.2674C65.8695 53.4636 65.982 53.7159 65.982 54.0242V64.1564H76.3659V54.0242C76.3659 53.7159 76.4645 53.4636 76.6614 53.2674C76.8584 53.0713 77.1116 52.9732 77.4212 52.9732H82.8665C83.176 52.9732 83.4293 53.0713 83.6262 53.2674C83.8232 53.4636 83.9217 53.7159 83.9217 54.0242V81.3516C83.9217 81.6599 83.8232 81.9122 83.6262 82.1083C83.4293 82.3045 83.176 82.4026 82.8665 82.4026H77.4212C77.1116 82.4026 76.8584 82.3045 76.6614 82.1083C76.4645 81.9122 76.3659 81.6599 76.3659 81.3516V70.8831H65.982V81.3516C65.982 81.6599 65.8695 81.9122 65.6443 82.1083C65.4474 82.3045 65.1941 82.4026 64.8845 82.4026H59.4393ZM101.486 82.823C97.5185 82.823 94.3949 81.8561 92.1155 79.9221C89.8361 77.9882 88.6263 75.1434 88.4853 71.3876C88.4575 70.5748 88.4431 69.3696 88.4431 67.772C88.4431 66.1464 88.4575 64.9272 88.4853 64.1143C88.6263 60.4146 89.8504 57.5698 92.1577 55.5798C94.4937 53.5617 97.6029 52.5527 101.486 52.5527C105.37 52.5527 108.479 53.5617 110.815 55.5798C113.151 57.5698 114.375 60.4146 114.487 64.1143C114.544 65.7399 114.572 66.9591 114.572 67.772C114.572 68.5567 114.544 69.762 114.487 71.3876C114.346 75.1434 113.137 77.9882 110.857 79.9221C108.578 81.8561 105.454 82.823 101.486 82.823ZM101.486 76.769C103.034 76.769 104.258 76.3065 105.159 75.3816C106.087 74.4567 106.58 73.0413 106.636 71.1353C106.693 69.5097 106.721 68.3606 106.721 67.6879C106.721 66.9591 106.693 65.81 106.636 64.2404C106.58 62.3345 106.087 60.9191 105.159 59.9942C104.23 59.0693 103.006 58.6068 101.486 58.6068C99.9667 58.6068 98.7426 59.0693 97.814 59.9942C96.9132 60.9191 96.421 62.3345 96.3366 64.2404C96.3087 65.0252 96.2944 66.1744 96.2944 67.6879C96.2944 69.1734 96.3087 70.3225 96.3366 71.1353C96.421 73.0413 96.9132 74.4567 97.814 75.3816C98.7148 76.3065 99.9389 76.769 101.486 76.769ZM120.098 82.4026C119.817 82.4026 119.564 82.3045 119.338 82.1083C119.142 81.8841 119.043 81.6318 119.043 81.3516V54.0242C119.043 53.7159 119.142 53.4636 119.338 53.2674C119.564 53.0713 119.817 52.9732 120.098 52.9732H131.917C135.519 52.9732 138.348 53.8 140.402 55.4536C142.484 57.1073 143.525 59.5177 143.525 62.6849C143.525 65.824 142.498 68.1924 140.444 69.79C138.39 71.3596 135.547 72.1444 131.917 72.1444H126.894V81.3516C126.894 81.6599 126.782 81.9122 126.556 82.1083C126.36 82.3045 126.106 82.4026 125.797 82.4026H120.098ZM131.706 66.3425C132.945 66.3425 133.915 66.0342 134.619 65.4176C135.322 64.7729 135.674 63.8341 135.674 62.6008C135.674 61.4516 135.336 60.5407 134.661 59.8681C134.013 59.1674 133.029 58.817 131.706 58.817H126.767V66.3425H131.706Z" fill="#010101"/>
                    <path d="M0 90.8108V2.52252C0 1.12938 1.13392 0 2.53266 0H5.06533C6.46407 0 7.59799 1.12937 7.59799 2.52252V90.8108C7.59799 92.2041 6.46407 93.3333 5.06533 93.3333H2.53266C1.13392 93.3333 0 92.2041 0 90.8108Z" fill="#010101"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_158_282">
                    <rect width="168" height="93.3333" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </NavLink>
            <h1>Авторизация</h1>
            <form action="" method="post" className="flex-helper" id="loginForm">
                <p id="error-msg"></p>
                <input type="text" name="login" placeholder="Логин" pattern="[0-9A-Za-z]{3,8}" required id="form__login-input" />
                <input type="text" name="password" placeholder="Пароль" pattern="[0-9A-Za-z]{3,8}" required id="form__password-input" />
                <button id="form__accept">Войти</button>
            </form>
            <p className="auth-form__title">Если у вас еще нет аккаунта - <NavLink to="/auth/registration">создать новый</NavLink></p>
        </div>
    </section> 
  );
}

export default Login;