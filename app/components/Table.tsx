"use client";

import React from "react";
import { cn } from "../utils/helpers";

interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  className?: string;
}

export function Table<T extends { id: string | number }>({
  columns,
  data,
  className,
}: TableProps<T>) {
  return (
    <div className={cn("w-full overflow-x-auto rounded-xl border border-outline-variant/30 bg-surface-container-lowest", className)}>
      <table className="w-full border-collapse text-left font-body-md">
        <thead>
          <tr className="border-b border-outline-variant/20 bg-surface-container-low">
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-primary"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-outline-variant/10 text-on-surface-variant text-sm">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-surface-container-lowest transition-colors">
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                  {column.render ? column.render(item) : ((item as Record<string, unknown>)[column.key] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
