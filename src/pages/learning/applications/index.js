import React from "react";
import Flex, { FlexItem } from "@instructure/ui-layout/lib/components/Flex";
import Heading from "@instructure/ui-elements/lib/components/Heading";
import Text from "@instructure/ui-elements/lib/components/Text";
import Button from "@instructure/ui-buttons/lib/components/Button";
import { navigateTo } from "gatsby-link";

const IndexPage = () => (
  <div>
    <Flex justifyItems="center" padding="large" direction="column">
      <FlexItem shrink grow textAlign="center">
        <Heading level="h2" margin="0 0 medium">
          Coming Soon!
        </Heading>
      </FlexItem>
      <FlexItem textAlign="center" margin="0 0 medium">
        <Text>
          For now you might want to check out the section for content creators.
        </Text>
      </FlexItem>
      <FlexItem grow shrink textAlign="center">
        <div>
          <Button
            onClick={() => {
              navigateTo("/learning/content");
            }}
            variant="primary"
            size="large"
          >
            Go to Content
          </Button>
        </div>
      </FlexItem>
    </Flex>
  </div>
);

export default IndexPage;
