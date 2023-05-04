/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useRef } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    textAlign: "justify",
    lineHeight: 1.5,
    marginBottom: 5,
  },
});

const BlogsPdf = ({ blogContent }) => {
  return (
    <div>
      <Document>
        <Page style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>Blogs Section</Text>
            <View>
              {blogContent.map((content, index) => (
                <View key={index} style={{ marginBottom: 10 }}>
                  <Text style={styles.title}>{content.question}</Text>
                  <Text style={styles.text}>{content.answer}</Text>
                </View>
              ))}
            </View>
          </View>
        </Page>
      </Document>
    </div>
  );
};

export default BlogsPdf;