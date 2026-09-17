import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useCallback, useMemo } from 'react';
import { RoutesEnum, RoutesNamesRuEnum } from '@shared/utils';
import { useLocation, useNavigate } from 'react-router';
import KitchenIcon from '@mui/icons-material/Kitchen';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MobileNavigationWidget = observer(function MobileNavigationWidget() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = useCallback(
    (_: React.SyntheticEvent, newValue: RoutesEnum) => {
      navigate(newValue);
    },
    [],
  );

  const activeTab = useMemo(() => {
    return Object.values(RoutesEnum).find((route) =>
      location.pathname.includes(route),
    );
  }, [location.pathname]);

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation value={activeTab} onChange={handleChange} showLabels>
        <BottomNavigationAction
          label={RoutesNamesRuEnum.PRODUCTS}
          value={RoutesEnum.PRODUCTS}
          icon={<KitchenIcon />}
        />
        <BottomNavigationAction
          label={RoutesNamesRuEnum.STATISTICS}
          value={RoutesEnum.STATISTICS}
          icon={<BarChartIcon />}
        />
        <BottomNavigationAction
          label={RoutesNamesRuEnum.PROFILE}
          value={RoutesEnum.PROFILE}
          icon={<AccountCircleIcon />}
        />
      </BottomNavigation>
    </Box>
  );
});

export default MobileNavigationWidget;
