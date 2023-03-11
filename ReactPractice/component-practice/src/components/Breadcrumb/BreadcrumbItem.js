import styled from "@emotion/styled";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";

const BreadcrumbItemContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`;

const BreadcrumbItem = ({ children, href, active, __TYPE, ...props }) => {
  return (
    <BreadcrumbItemContainer {...props}>
      <Anchor href={href}>
        <Text size={14} strong={active}>
          {children}
        </Text>
      </Anchor>
      {!active && <Icon name="chevron-right" size={22} strokeWidth={1} />}
    </BreadcrumbItemContainer>
  );
};

export default BreadcrumbItem;

BreadcrumbItem.defaultProps = {
  __TYPE: "BreadcrumbItem",
};
BreadcrumbItem.propTypes = {
  __TYPE: "BreadcrumbItem",
};
