import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";

const TicketDocument = ({ props }) => (
  <Document>
    <Page>
      <View>
        <Text>Prop1: {props.name}</Text>
        <Text>Prop2: {props.name}</Text>
      </View>
    </Page>
  </Document>
);

export default TicketDocument;
